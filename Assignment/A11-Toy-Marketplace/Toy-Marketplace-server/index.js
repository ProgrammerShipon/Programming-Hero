const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority`;

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("<h1> Assalamualaikum </h1>");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// });

const client = new MongoClient(
	uri,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverApi: ServerApiVersion.v1,
	},
	{ connectTimeoutMS: 30000 },
	{ keepAlive: 1 }
);

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		// client.connect();

		const db = client.db("ToyData");
		const collection = db.collection("Toys");

		// const indexKeys = { toyCategory: 1, toyName: 1 };
		// const indexOptions = { name: "allToysSearch" };

		// const result = await collection.createIndex(indexKeys, indexOptions);
		// console.log(result);

		app.post("/add-toy", async (req, res) => {
			const toy = req.body;

			const result = await collection.insertOne(toy);
			res.send(result);
		});

		app.get("/all-toys", async (req, res) => {
			const result = await collection.find({}).toArray();
			res.send(result);
		});

		app.get("/singleToy/:id", async (req, res) => {
			const toy = await collection.findOne({
				_id: new ObjectId(req.params.id),
			});
			res.send(toy);
		});

		app.get("/my-toys/:email", async (req, res) => {
			const myToy = await collection
				.find({ sellerEmail: req.params.email })
				.toArray();
			res.send(myToy);
		});

		app.get("/all-toy-search/:search", async (req, res) => {
			const search = req.params.search;

			const result = await collection
				.find({
					$or: [
						{ toyCategory: { $regex: search, $options: "i" } },
						{ toyName: { $regex: search, $options: "i" } },
					],
				})
				.toArray();
			res.send(result);
		});

		app.get("/mytoys/:sort", async (req, res) => {
			const sort = req.params.sort;
			const options = {
				sort: {
					toyPrice: sort === "asc" ? 1 : -1,
				},
			};
			const query = { sellerEmail: req.query.email };
			const result = await collection.find(query, options).toArray();

			res.send(result);
		});

		app.put("/up-date/:id", async (req, res) => {
			const id = req.params.id;
			const toy = req.body;
			const filtered = { _id: new ObjectId(id) };

			const updateDoc = {
				$set: {
					sellerName: toy?.sellerName,
					sellerEmail: toy?.sellerEmail,
					toyName: toy?.toyName,
					toyPrice: toy?.toyPrice,
					toyDescription: toy?.toyDescription,
					imgUrl: toy?.imgUrl,
					toyCategory: toy?.toyCategory,
					toyQuantity: toy?.toyQuantity,
					toyRating: toy?.toyRating,
				},
			};

			const result = await collection.updateOne(filtered, updateDoc);
			res.send(result);
		});

		app.delete("/toy/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };

			const result = await collection.deleteOne(query);
			res.send(result);
		});

		app.get("/shopCategory/:category", async (req, res) => {
			const toyCategory = req.params.category || "";
			const query = toyCategory !== "" ? { toyCategory } : {};
			const result = await collection.find(query).limit(6).toArray();
			res.send(result);
		});

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Data base connected success!");
	} finally {
		// Ensures that the client will close when you finish/error
		//   await client.close();
	}
}
run().catch(console.dir);

app.listen(port, () => {
	console.log(`Server Running Success ${port}`);
});
