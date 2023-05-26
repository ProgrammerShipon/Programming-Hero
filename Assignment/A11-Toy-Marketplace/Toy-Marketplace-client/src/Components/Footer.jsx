import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
	return (
		<>
			<footer className="text-gray-600 body-font bg-gray-100">
				<div className="container px-5 pt-16 mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:text-left text-center">
						<div className="w-full px-4">
							<div className="flex justify-center items-center gap-4 flex-col text-center">
								<img src={logo} alt="logo" className="w-4/12" />
								<p>
									TC Industries Ltd. <br /> Providing reliable tech since 2009
								</p>
							</div>
						</div>

						<div className="w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Mini Car toy
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Plastic Car
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Remote Control
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Police Car
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">Track</a>
								</li>
							</nav>
						</div>

						<div className="w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								Company
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">Branding</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">Design</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">Marketing</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Advertisement
									</a>
								</li>
							</nav>
						</div>

						<div className="w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
								LEGAL
							</h2>
							<nav className="list-none mb-10">
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Terms of use
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Cookie policy
									</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">About</a>
								</li>
								<li>
									<a className="text-gray-600 hover:text-gray-800">
										Contact Us
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>

				<div className="border-t bg-gray-200 border-gray-200">
					<div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
						<div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
							<div className="relative sm:w-64 w-40 sm:mr-4 mr-1">
								<label
									for="footer-field"
									className="leading-7 text-sm text-gray-600"
								>
									Subscription new Products :
								</label>
								<input
									type="text"
									id="footer-field"
									name="footer-field"
									placeholder="Your Email"
									className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<button className="btn inline-flex transition duration-300 text-[#18c4f7] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded">
								Subscribe Now
							</button>
						</div>

						<span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
							<a
								href="https://www.facebook.com/ShiponHossenRaju"
								className="text-gray-500"
							>
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-8 h-8 transition duration-300 hover:bg-slate-300 p-1 rounded hover:text-blue-600"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a
								href="https://twitter.com/ShiponHossenRa2"
								className="ml-3 text-gray-500"
							>
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-8 h-8 transition duration-300 hover:bg-slate-300 p-1 rounded hover:text-blue-700"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/shiponhossenraju/"
								className="ml-3 text-gray-500"
							>
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-8 h-8 transition duration-300 hover:bg-slate-300 p-1 rounded hover:text-red-500"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/shipon-hossen-raju-7927211a2/"
								className="ml-3 text-gray-500"
							>
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0"
									className="w-8 h-8 transition duration-300 hover:bg-slate-300 p-1 rounded hover:text-blue-600"
									viewBox="0 0 24 24"
								>
									<path
										stroke="none"
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
									></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>

				<div className="bg-gray-700">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-gray-100 text-sm text-center sm:text-left">
							© 2023 ToyCars
						</p>
						<span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-100 text-sm">
							Enamel pin tousled raclette tacos irony
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
