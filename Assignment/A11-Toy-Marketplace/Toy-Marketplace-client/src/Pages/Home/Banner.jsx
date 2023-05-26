import React from "react";
const image1 = `https://images.unsplash.com/photo-1672467575273-2918d93d00ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80`;

const Banner = () => {
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Before they sold out
							<br className="hidden lg:inline-block" />
							readymade gluten
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="btn inline-flex transition duration-300 text-[#1597be] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded">
								Show Details
							</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							className="object-cover object-center rounded shadow-2xl"
							alt="hero"
							src={image1}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
