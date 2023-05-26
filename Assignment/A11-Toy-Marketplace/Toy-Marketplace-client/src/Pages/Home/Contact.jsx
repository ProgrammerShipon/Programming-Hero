import React from "react";

const Contact = () => {
	return (
		<>
			<section className="text-gray-600 body-font relative">
				<div className="container mx-auto">
					<div className="flex flex-col text-center w-full mb-10">
						<h2 className="text:md md:text-3xl text-[#18c4f7] font-bold md:my-6 my-4 text-center">
							Contact Us & Feedback
						</h2>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven't heard of them man bun deep jianbing selfies heirloom.
						</p>
					</div>

					<div className="flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
							<iframe
								width="100%"
								height="100%"
								className="absolute inset-0"
								frameBorder={0}
								title="map"
								marginHeight={0}
								marginWidth={0}
								scrolling="no"
								src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
								style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
							/>
							<div className="bg-white relative flex flex-wrap py-5 px-3 rounded shadow-md">
								<div className="lg:w-1/2 px-6">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										ADDRESS
									</h2>
									<p className="mt-1">
										Photo booth tattooed prism, portland taiyaki hoodie neutra
										typewriter
									</p>
								</div>
								<div className="lg:w-1/2 px-6 py-4 mt-4 lg:mt-0">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										EMAIL
									</h2>
									<a className="text-indigo-500 leading-relaxed">
										example@email.com
									</a>
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
										PHONE
									</h2>
									<p className="leading-relaxed">123-456-7890</p>
								</div>
							</div>
						</div>

						<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto rounded-md shadow-md w-full md:p-8 mt-8 md:mt-0">
							<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
								Feedback
							</h2>
							<p className="leading-relaxed mb-5 text-gray-600">
								Post-ironic portland shabby chic echo park, banjo fashion axe
							</p>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									defaultValue={""}
								/>
							</div>
							<button className="btn inline-flex transition duration-300 text-[#18c4f7] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded">
								Send Now
							</button>
							<p className="text-xs text-gray-500 mt-3">
								Chicharrones blog helvetica normcore iceland tousled brook viral
								artisan.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
