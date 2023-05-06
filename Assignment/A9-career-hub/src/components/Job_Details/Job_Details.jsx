import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Route_Banner from "../Route_Banner/Route_Banner";
import {
	CalendarDaysIcon,
	CurrencyDollarIcon,
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import "./Job_Details.css";
import toast, { Toaster } from "react-hot-toast";

const Job_Details = () => {
	// Get and Set to localStorage
	function setLocalStore(jobId) {
		let storedNumber = JSON.parse(localStorage.getItem("jobId")) || [];

		const exist = storedNumber.find((sn) => sn == jobId);
		if (exist) {
			toast("already added.");
		} else {
			toast("Apply this job");
			storedNumber.push(jobId);
		}

		localStorage.setItem("jobId", JSON.stringify(storedNumber));
	}

	// Data Load
	const job_Data = useLoaderData();
	const job_id = useParams();

	//  find the exist data
	const exist = job_Data.jobs.find((job) => job.id == job_id.jobId);
	const {
		id,
		job_description,
		job_responsibility,
		educational_requirements,
		experiences,
		salary,
		job_title,
		location,
		contact_information: { phone, email },
	} = exist;

	return (
		<section>
			<Route_Banner jobRoutePage="Job Details" />

			<div className="custom-container">
				<div className="flex flex-col md:flex-row gap-8 justify-between">
					<div className="flex flex-col gap-8 lg:w-4/6 ">
						<p>
							<span className="font-bold"> Job Description : </span>{" "}
							{job_description}{" "}
						</p>
						<p>
							<span className="font-bold"> Job Responsibility : </span>{" "}
							{job_responsibility}{" "}
						</p>
						<div>
							<p className="font-bold"> Educational Requirements : </p>
							<p> {educational_requirements} </p>
						</div>
						<div>
							<p className="font-bold"> Experiences : </p>
							<p> {experiences} </p>
						</div>
					</div>

					<div>
						<div className="border p-4 rounded-md jobDetailCart">
							<div className="pb-2 md:pb-3 lg:pb-5">
								<h2> Job Details : </h2>
								<p>
									<CurrencyDollarIcon className="w-5 " /> Salary : {salary}{" "}
								</p>
								<p>
									<CalendarDaysIcon className="w-5" /> Job Title : {job_title}{" "}
								</p>
							</div>
							<div className="pt-5">
								<h2> Contact Information : </h2>
								<p>
									{" "}
									<PhoneIcon className="w-5" /> Phone : {phone}{" "}
								</p>
								<p>
									{" "}
									<EnvelopeIcon className="w-5" /> Email : {email}{" "}
								</p>
								<p>
									{" "}
									<MapPinIcon className="w-5" /> Address : {location}{" "}
								</p>
							</div>
						</div>
						<div className="block">
							<button
								className="!block w-full mt-5 text-center main-btn"
								onClick={() => setLocalStore(id)}
							>
								{" "}
								Apply Job
							</button>
						</div>
					</div>
				</div>
			</div>
			<Toaster />
		</section>
	);
};

export default Job_Details;
