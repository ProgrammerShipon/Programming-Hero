import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import useTitle from "../useTitle";

const ToyDetails = () => {
	const toyData = useLoaderData();
	useTitle("Toy Details");

	const ratingStart = {
		size: 30,
		value: toyData?.toyRating,
		edit: false,
		isHalf: true,
	};

	return (
		<div className="container mx-auto">
			<div className="border my-7 shadow-md divide-y rounded-xl">
				<h1 className="text-4xl font-semibold text-center py-5">
					{" "}
					Toy Details Page{" "}
				</h1>
				<div className="md:grid md:grid-cols-2 items-center lg:divide-x divide-y">
					<div className=" p-16 ">
						<img
							className="w-full object-contain max-h-max"
							src={toyData?.imgUrl}
							alt=""
						/>
					</div>
					<div className="p-7 lg:p-10 divide-y">
						<div>
							<h2 className="text-2xl font-semibold mb-5">
								<span className="font-semibold ">Toy Name : </span>
								{toyData?.toyName}
							</h2>
						</div>

						<div className="py-4">
							<p>
								<span className="font-semibold">Toy Description : </span>
								{toyData?.toyDescription}
							</p>
						</div>

						<div className="py-4">
							<span className="font-semibold">Toy info : </span>

							{toyData?.toyPrice && (
								<h3 className="text-md mb-2  pl-5">
									Price:{" "}
									<span className="font-semibold"> {toyData?.toyPrice} </span>{" "}
								</h3>
							)}

							{toyData?.toyQuantity && (
								<h3 className="text-md mb-2  pl-5">
									Available Quantity:{" "}
									<span className="font-semibold">
										{" "}
										{toyData?.toyQuantity}{" "}
									</span>
								</h3>
							)}

							{toyData?.toyRating && (
								<div className="text-md mb-2 pl-5 flex items-center">
									<span className="mr-3">Rating:</span>{" "}
									<ReactStars {...ratingStart} /> ({toyData?.toyRating})
								</div>
							)}

							{toyData?.toyCategory && (
								<h3 className="text-md mb-2  pl-5">
									Category:{" "}
									<span className="bg-gray-100 p-1 rounded">
										{" "}
										{toyData?.toyCategory}
									</span>
								</h3>
							)}
						</div>

						<div className="py-4">
							<span className="font-semibold">Seller info : </span>
							<h2 className="text-xl font-semibold pl-5">
								{toyData?.sellerName}
							</h2>
							<p className=" pl-5">{toyData?.sellerEmail}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyDetails;
