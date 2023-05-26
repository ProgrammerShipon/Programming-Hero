import React from "react";
import GalleryItems from "./GalleryItems";

const Gallery = ({ allToys }) => {
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-col text-center w-full py-10">
						<h2 className="text:md md:text-3xl text-[#18c4f7] font-bold md:my-6 my-4 text-center">
							Gallery Imges
						</h2>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven't heard of them man bun deep jianbing selfies heirloom.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{allToys.slice(0, 6).map((toy, idx) => (
							<GalleryItems toy={toy} key={idx} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
