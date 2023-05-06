import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebookF,
	AiOutlineGithub,
	AiOutlineInstagram,
} from "react-icons/all";

const Footer = () => {
	return (
		<footer className="footer-content bg-[#1A1919] py-8 md:16 lg:py-28 divide-y divide-gray-500 mt-8 md:mt-16 lg:mt-24">
			<section className="custom-container  pb-10">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
					<div className="col-span-2">
						<h1 className="text-3xl font-bold tracking-wide">
							{" "}
							ProgrammerShipon{" "}
						</h1>
						<p>
							There are many variations of passages of Lorem Ipsum , but the
							majority have suffered alteration in some form.
						</p>

						<div className="footer-icons">
							<FaFacebookF />
							<AiOutlineGithub />
							<AiOutlineInstagram />
						</div>
					</div>

					<div>
						<h2> Company </h2>
						<ul>
							<li>
								<Link to="#"> About Us </Link>
							</li>
							<li>
								<Link to="#"> Work </Link>
							</li>
							<li>
								<Link to="#"> Latest News </Link>
							</li>
							<li>
								<Link to="#"> Careers </Link>
							</li>
						</ul>
					</div>

					<div>
						<h2> Product </h2>
						<ul>
							<li>
								<Link to="#"> Prototype </Link>
							</li>
							<li>
								<Link to="#"> Plans & Pricing </Link>
							</li>
							<li>
								<Link to="#"> Customers </Link>
							</li>
							<li>
								<Link to="#"> Integrations </Link>
							</li>
						</ul>
					</div>

					<div>
						<h2> Support </h2>
						<ul>
							<li>
								<Link to="#"> Help Desk </Link>
							</li>
							<li>
								<Link to="#"> Sales </Link>
							</li>
							<li>
								<Link to="#"> Become a Partner </Link>
							</li>
							<li>
								<Link to="#"> Developers </Link>
							</li>
						</ul>
					</div>

					<div>
						<h2> Contact </h2>
						<ul>
							<li>
								<Link to="#"> Aminpur, Pabna </Link>
							</li>
							<li>
								<Link to="#"> +880 1765037372 </Link>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="custom-container">
				<div className="pt-10 flex justify-between flex-wrap text-center items-center">
					<p> &copy;2023 ProgrammerShipon. All Rights Reserved </p>
					<p>
						Powered by <span className="font-bold">ProgrammerShipon</span>
					</p>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
