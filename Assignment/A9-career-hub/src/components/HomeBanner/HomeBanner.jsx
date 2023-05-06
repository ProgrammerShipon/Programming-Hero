import React from "react";
import bannerImg from "../../assets/shiponHomeBanner.png";

const HomeBanner = () => {
	return (
		<section>
			<div className="custom-container">
				<div className="md:grid grid-cols-2 justify-between items-center py-8 md:py-16">
					<div className="md:w-4/5 w-full">
						<h1 className="text-3xl lg:text-[5rem] md:text-[4rem] md:leading-[5.3rem] leading-[3rem] capitalize">
							One step closer to your
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
								{" "}
								Dream job
							</span>
						</h1>
						<p className="md:py-8 py-4">
							{" "}
							Explore thousands of job opportunities with all the information
							you need. Its your future. Come find it. Manage all your job
							application from start to finish.{" "}
						</p>
						<div className="flex md:block justify-center mb-4">
							<button className="main-btn"> Get Started </button>
						</div>
					</div>
					<figure className="flex justify-end overflow-hidden w-full">
						<img className="w-[150%]" src={bannerImg} alt="banner image" />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
