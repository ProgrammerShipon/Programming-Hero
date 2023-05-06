import React, { useEffect, useState } from "react";
import SectionTitles from "../util/sectionTitles";
import CategoryItem from "./CategoryItem";

const JobCategorys = () => {
	const [jobsCategory, setJobsCategory] = useState([]);

	// Loading data job Category
	useEffect(() => {
		fetch("jobCategory.json")
			.then((res) => res.json())
			.then((data) => setJobsCategory(data));
	}, []);

	return (
		<section>
			<div className="custom-container">
				<SectionTitles
					title="Job category list"
					description="Explore thousands of job opportunities with all the information you need. Its your future"
				/>
				<div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 items-center gap-3 md:gap-5 lg:gap-8">
					{jobsCategory.map((job) => (
						<CategoryItem key={job.id} job={job} />
					))}
				</div>
			</div>
		</section>
	);
};

export default JobCategorys;
