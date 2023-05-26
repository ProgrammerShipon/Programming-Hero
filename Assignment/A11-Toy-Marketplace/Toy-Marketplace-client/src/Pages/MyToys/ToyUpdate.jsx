import React, { useContext, useState } from "react";
import Select from "react-select";
import { FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";

const ToyUpdate = () => {
	const toy = useLoaderData();

	const [selectedOption, setSelectedOption] = useState(toy?.toyCategory);
	const { user } = useContext(AuthContext);

	const options = [
		{ value: "sports car", label: "Sports Car" },
		{ value: "regular car", label: "Regular car" },
		{ value: "mini police car", label: "Mini police car" },
	];

	const upDataSubmit = (e) => {
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

		fetch(
			`https://toy-marketplace-server-khaki-mu.vercel.app/up-date/${toy?._id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newToy),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success("Updated Success");
				}
			})
			.catch((err) => {
				toast.error(" Updated Failed");
			});
	};

	return (
		<>
			<div className="container mx-auto p-4 my-4">
				<div className="max-w-3xl mx-auto shadow-xl border border-gray-100 p-7 rounded-md">
					<h1 className="text-3xl font-bold mb-4 pb-4 border-b border-gray-300 text-center">
						Update your Toy
					</h1>

					<form className="container mx-auto" onSubmit={upDataSubmit}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
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
									defaultValue={toy?.toyName}
									required
								/>
							</div>

							<div>
								<label className="block" htmlFor="toyCategory">
									Toy Category : ({toy?.toyCategory})
								</label>
								<Select
									defaultValue={toy?.toyCategory}
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
									defaultValue={toy?.toyPrice}
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
									defaultValue={toy?.toyRating}
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
									defaultValue={toy?.toyQuantity}
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
									defaultValue={toy?.imgUrl}
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
									defaultValue={toy?.toyDescription}
									required
								/>
							</div>
						</div>

						<div className="mt-6 flex gap-4 justify-end">
							<button
								className="btn  btn-success"
								type="submit"
								onClick={() => upDataSubmit()}
							>
								Update
							</button>

							<button className="btn btn-error">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ToyUpdate;
