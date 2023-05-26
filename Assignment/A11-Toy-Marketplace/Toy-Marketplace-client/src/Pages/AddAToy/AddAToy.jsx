import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Select from "react-select";
import { toast } from "react-hot-toast";
import useTitle from "../useTitle";

const AddAToy = () => {
	useTitle("Add A Toy");
	const { user } = useContext(AuthContext);
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ value: "sports car", label: "Sports Car" },
		{ value: "regular car", label: "Regular car" },
		{ value: "mini police car", label: "Mini police car" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const sellerName = form.sellerName.value;
		const sellerEmail = form.sellerEmail.value;
		const toyName = form.toyName.value;
		const toyPrice = form.toyPrice.value;
		const toyDescription = form.toyDescription.value;
		const imgUrl = form.imgUrl.value;
		const toyCategory = selectedOption.label;
		const toyQuantity = form.toyQuantity.value;
		const toyRating = form.rating.value;

		const newToy = {
			sellerName: sellerName,
			sellerEmail: sellerEmail,
			toyName: toyName,
			toyPrice: toyPrice,
			toyDescription: toyDescription,
			imgUrl: imgUrl,
			toyCategory: toyCategory,
			toyQuantity: toyQuantity,
			toyRating: toyRating,
		};

		fetch("https://toy-marketplace-server-khaki-mu.vercel.app/add-toy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newToy),
		})
			.then((res) => res.json())
			.then((data) => {
				form.reset();
				toast.success("Toy Add Success");
			})
			.catch((err) => {
				toast.error("Unexpected Token ");
				console.error(err);
			});
	};

	return (
		<div className="container mx-auto p-4 my-4">
			<div className="max-w-3xl mx-auto shadow-xl border border-gray-100 p-7 rounded-md">
				<h1 className="text-3xl font-bold mb-4 pb-4 border-b border-gray-300 text-center">
					Add A Toy
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block" htmlFor="sellerName">
								Seller Name :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="text"
								id="name"
								defaultValue={user?.displayName}
								name="sellerName"
								readOnly
								required
							/>
						</div>

						<div>
							<label className="block" htmlFor="sellerEmail">
								Seller Email :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="email"
								id="name"
								defaultValue={user?.email}
								name="sellerEmail"
								readOnly
								required
							/>
						</div>

						<div>
							<label className="block" htmlFor="toyName">
								Toy Name :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="text"
								id="toyName"
								name="toyName"
								required
							/>
						</div>

						<div>
							<label className="block" htmlFor="toyCategory">
								Toy Category :
							</label>
							<Select
								defaultValue={selectedOption}
								onChange={setSelectedOption}
								options={options}
							/>
						</div>

						<div>
							<label className="block" htmlFor="price">
								Price :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="number"
								id="price"
								name="toyPrice"
								required
							/>
						</div>

						<div>
							<label className="block" htmlFor="Rating">
								Rating :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="text"
								id="Rating"
								name="rating"
							/>
						</div>

						<div>
							<label className="block" htmlFor="quantity">
								Available quantity :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="number"
								id="quantity"
								name="toyQuantity"
								required
							/>
						</div>

						<div>
							<label className="block" htmlFor="picture">
								Picture URL :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none focus:shadow-md  "
								type="text"
								id="picture"
								name="imgUrl"
								required
							/>
						</div>

						<div className="md:col-span-2">
							<label className="block" htmlFor="toyDescription">
								Detail Description :
							</label>
							<input
								className="border border-gray-300 p-2 w-full rounded-md outline-none   focus:shadow-md"
								type="text"
								id="toyDescription"
								name="toyDescription"
								required
							/>
						</div>
					</div>

					<div className="mt-6 text-center border-t border-gray-300 pt-4">
						<button
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
							type="submit"
						>
							Add Now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAToy;
