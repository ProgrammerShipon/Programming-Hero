import React from "react";

const GalleryItems = ({ toy }) => {
	return (
		<>
			<div data-aos="zoom-in">
				<div className="flex h-80 relative">
					<img
						alt="gallery"
						className="absolute w-full h-full object-cover object-center"
						src={toy?.imgUrl}
					/>

					<div className="px-8 py-10 transition duration-300 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
						<h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
							{toy?.toyCategory}
						</h2>
						<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
							{toy?.toyName}
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default GalleryItems;
