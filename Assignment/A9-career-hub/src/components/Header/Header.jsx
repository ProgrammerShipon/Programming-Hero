import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight, AiOutlineClose } from "react-icons/all";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	// menu responsive toggle
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="bg-[#f9f9ff]">
			<div className="custom-container text-center flex mx-auto justify-between py-4">
				<div>
					<Link to="/">
						<h1 className="text-2xl font-semibold"> ProgrammerShipon </h1>
					</Link>
				</div>

				<div
					className={`h-[50svh] duration-700 w-screen bg-gray-100 fixed left-0  ${
						menuOpen ? "top-0" : "-top-full"
					} `}
				>
					<div className="h-full">
						<button
							className="text-gray-600 absolute top-5 right-5"
							onClick={toggleMenu}
						>
							<AiOutlineClose className="w-7 h-7" />
						</button>
						<nav
							className={`h-full flex justify-center items-center flex-col gap-3`}
						>
							<NavLink className="nav-link" to="/">
								{" "}
								Home{" "}
							</NavLink>
							<NavLink className="nav-link" to="/statistics">
								{" "}
								Statistics{" "}
							</NavLink>
							<NavLink
								className="nav-link"
								to="/appliedjobs"
								onClick={() => setMenuOpen(false)}
							>
								Applied Jobs
							</NavLink>
							<NavLink
								className="nav-link"
								to="/blog"
								onClick={() => setMenuOpen(false)}
							>
								Blog
							</NavLink>

							<div>
								<button className="main-btn hidden">Start Apply</button>
							</div>
						</nav>
					</div>
				</div>

				<div>
					<button
						className="text-gray-600 hover:text-gray-500 md:hidden"
						onClick={toggleMenu}
					>
						<HiOutlineBars3BottomRight className="w-7 h-7" />
					</button>
					<nav className={`md:flex md:flex-wrap hidden `}>
						<NavLink className="nav-link" to="/">
							{" "}
							Home{" "}
						</NavLink>
						<NavLink className="nav-link" to="/statistics">
							{" "}
							Statistics{" "}
						</NavLink>
						<NavLink
							className="nav-link"
							to="/appliedjobs"
							onClick={() => setMenuOpen(false)}
						>
							Applied Jobs
						</NavLink>
						<NavLink
							className="nav-link"
							to="/blog"
							onClick={() => setMenuOpen(false)}
						>
							Blog
						</NavLink>
					</nav>
				</div>
				<div className="hidden md:block">
					<button className="main-btn hidden">Start Apply</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
