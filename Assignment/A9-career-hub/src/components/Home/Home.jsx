import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobCategorys from "../JobCategorys/JobCategorys";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
	return (
		<div>
			{/* Banner Component */}
			<HomeBanner />

			{/* Job Categorys Components */}
			<JobCategorys />

			{/* Featured Jobs Components */}
			<FeaturedJobs />
		</div>
	);
};

export default Home;
