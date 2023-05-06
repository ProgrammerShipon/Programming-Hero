import React from "react";
import "./FeaturedJobs.css";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon  } from '@heroicons/react/24/outline';

const JobItem = ({ job }) => {
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
		<div className="feature_jobs">
			<figure>
				<img
					className="w-full h-44 object-contain"
					src={company_logo}
					alt="company logo"
				/>
			</figure>
			<div>
				<h2> {job_title} </h2>
				<p className="text-gray-500"> {company_name} </p>
				<div className="job_facility">
					<p> {remote_or_onsite} </p>
					<p>{fulltime_or_parttime}</p>
				</div>
				<div className="location_salary">
					<p> <MapPinIcon className="h-6 w-6 text-blue-500" /> {location} </p>
					<p><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /> Salary :  {salary} </p>
				</div>
			</div>
			<Link to={`/job_details/${id}`} ><button className="main-btn"> View Details </button></Link>
		</div>
	);
};

export default JobItem;
