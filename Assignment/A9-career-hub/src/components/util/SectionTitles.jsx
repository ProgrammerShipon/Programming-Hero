import React from "react";

const SectionTitles = ({ title, description }) => {


	return (
		<div className="text-center mb-2">
			<h1 className="text-5xl font-bold">{title}</h1>
			<p className="my-5"> {description} </p>
		</div>
	);
};

export default SectionTitles;
