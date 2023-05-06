import React, { useEffect, useState } from "react";
import SectionTitles from "../util/sectionTitles";
import JobItem from "./JobItem";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
	const [job, setJob] = useState([]);
	const job_data = useLoaderData([]);

	// only 4 data
	useEffect(() => {
		setJob(job_data.jobs.slice(0, 4));
	}, []);

	// clicking show all data
	const seeAll = () => {
		setJob(job_data.jobs);
	};

	console.log(job.length);
	console.log(job_data.jobs.length);

	return (
		<section>
			<div className="custom-container">
				<SectionTitles
					title={"Featured Jobs"}
					description={
						"Explore thousands of job opportunities with all the information you need. Its your future"
					}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{job.map((job) => (
						<JobItem key={job.id} job={job} />
					))}
				</div>
				{job.length != job_data.jobs.length && (
					<div className="flex justify-center items-center pt-12">
						<div onClick={seeAll} className="main-btn">
							{" "}
							See All{" "}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default FeaturedJobs;
