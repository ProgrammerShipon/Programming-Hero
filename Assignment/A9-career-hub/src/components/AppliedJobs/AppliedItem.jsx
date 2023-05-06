import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const AppliedItem = ({ job }) => {
	const {
		id,
		company_logo,
		company_name,
		job_title,
		remote_or_onsite,
		fulltime_or_parttime,
		location,
		salary,
	} = job;

	return (
		<div className="flex flex-col md:flex-row justify-between items-center rounded-xl shadow-md gap-10 border border-gray-300 p-5">
			<div className="flex flex-col md:flex-row gap-8">
				<figure className="h-52 w-52">
					<img className="w-full object-contain" src={company_logo} alt="" />
				</figure>
				<div>
					<h2 className="text-3xl font-semibold mb-2"> {job_title} </h2>
					<p className="text-gray-500 font-semibold text-xl">
						{" "}
						{company_name}{" "}
					</p>
					<p className="flex gap-8">
						<span className="py-2 px-4 rounded-md shadow-sm my-4 border text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
							{" "}
							{remote_or_onsite}{" "}
						</span>
						<span className="py-2 px-4 rounded-md shadow-sm my-4 border text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
							{" "}
							{fulltime_or_parttime}{" "}
						</span>
					</p>
					<p className="text-md text-gray-400 flex items-center gap-5 text-base">
						<span className="flex gap-1 items-center">
							<MapPinIcon className="w-5" />
							{location}
						</span>
						<span className="flex gap-1 items-center">
							<CurrencyDollarIcon className="w-5" />
							{salary}
						</span>
					</p>
				</div>
			</div>
			<div>
				<Link to={`/job_details/${id}`}>
					<button className="main-btn"> View Details </button>
				</Link>
			</div>
		</div>
	);
};

export default AppliedItem;
