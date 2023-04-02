import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
	return (
		<div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col"  >
			<h2 className="text-center">
				<span className="text-5xl font-extrabold text-purple-700">
					{" "}
					{price.price}
				</span>
				<span className="text-2xl text-white font-bold ">/mon</span>{" "}
			</h2>
			<h5 className="text-2xl font-bold my-6 text-center"> {price.name} </h5>
			<p className="font-bold text-white underline"> Features </p>
			{price?.features.map((feature, idx) => (
				<Feature key={idx} feature={feature}></Feature>
			))}
			<button className="w-full bg-green-500 py-2 rounded-md text-white font-bold mt-auto">Buy Now</button>
		</div>
	);
};

export default PriceCard;
