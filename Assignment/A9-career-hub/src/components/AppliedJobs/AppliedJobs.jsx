import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Route_Banner from "../Route_Banner/Route_Banner";
import AppliedItem from "./AppliedItem";

const AppliedJobs = () => {
	const [job, setJob] = useState([]);

	let storedNumber = JSON.parse(localStorage.getItem("jobId")) || [];
	const job_Data = useLoaderData();

	// Get Applied Data
	let appliedJobs = [];
	storedNumber.map((sn) => {
		const exist = job_Data.jobs.find((jb) => jb.id == sn);
		exist && appliedJobs.push(exist);
	});

	useEffect(() => {
		setJob(appliedJobs);
	}, []);

	const remoteHandle = (options) => {
		let optionValue = options.target.value;
		if (optionValue == "remote") {
			let filteredJobs = [];
			for (const obj of appliedJobs) {
				if (obj.remote_or_onsite == "Remote") {
					filteredJobs.push(obj);
				}
			}

			setJob(filteredJobs);
		} else if (optionValue == "onsite") {
			let filteredJobs = [];
			for (const obj of appliedJobs) {
				if (obj.remote_or_onsite == "Onsite") {
					filteredJobs.push(obj);
				}
			}
			setJob(filteredJobs);
		} else {
			setJob(appliedJobs);
		}
	};

	const partTimeHandle = (options) => {
		const optionValue = options.target.value;

		if (optionValue == "Full-Time") {
			let filteredJobs = [];
			for (const obj of appliedJobs) {
				if (obj.fulltime_or_parttime == "Full-time") {
					filteredJobs.push(obj);
				}
			}
			setJob(filteredJobs);
		} else if (optionValue == "Part-Time") {
			let filteredJobs = [];
			for (const obj of appliedJobs) {
				if (obj.fulltime_or_parttime == "Part-time") {
					filteredJobs.push(obj);
				}
			}
			setJob(filteredJobs);
		} else {
			setJob(appliedJobs);
		}
	};

	const allHandle = () => {
		setJob(appliedJobs);
	};

	return (
		<div>
			<Route_Banner jobRoutePage="Applied Jobs" />

			<div className="custom-container">
				<div className="flex justify-center md:justify-between mb-8">
					<div></div>
					<div className="flex flex-col md:flex-row gap-4">
						<button onClick={allHandle} className="main-btn">
							All
						</button>
						<select
							onChange={partTimeHandle}
							className="block min-w-fit cursor-pointer bg-white border border-gray-400 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
						>
							<option> Full-Time or Part-Time </option>
							<option value="Full-Time">Full-Time</option>
							<option value="Part-Time">Part-Time</option>
						</select>
						<select
							onChange={remoteHandle}
							className="block min-w-fit cursor-pointer bg-white border border-gray-400 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
						>
							<option> Onsite or Remote </option>
							<option value="onsite">Onsite</option>
							<option value="remote">Remote</option>
						</select>
					</div>
				</div>
			</div>

			<div className="custom-container">
				<div className="flex flex-col gap-12">
					{job.map((job) => (
						<AppliedItem key={job.id} job={job} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AppliedJobs;
