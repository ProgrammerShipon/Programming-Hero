import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";

const Header = () => {
	const { user, setLoading, logOut } = useContext(AuthContext);

	const logOutHandle = () => {
		setLoading(true);

		logOut()
			.then(() => {
				toast.error("Logout Successful");
			})
			.catch();
	};

	const navItems = (
		<>
			<li>
				<NavLink to="/" className="mr-5 hover:text-gray-900 cursor-pointer">
					Home
				</NavLink>
			</li>

			<li>
				<NavLink
					to="/all-toys"
					className="mr-5 hover:text-gray-900 cursor-pointer"
				>
					All Toys
				</NavLink>
			</li>

			{user && (
				<>
					<li>
						<NavLink
							to="/my-toys"
							className="mr-5 hover:text-gray-900 cursor-pointer"
						>
							My Toys
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/add-a-toy"
							className="mr-5 hover:text-gray-900 cursor-pointer"
						>
							Add A Toy
						</NavLink>
					</li>
				</>
			)}

			<li>
				<NavLink
					to="/blogs"
					className="mr-5 hover:text-gray-900 cursor-pointer"
				>
					Blogs
				</NavLink>
			</li>

			{!user && (
				<li>
					<NavLink
						to="/login"
						className="mr-5 hover:text-gray-900 cursor-pointer"
					>
						Login
					</NavLink>
				</li>
			)}
		</>
	);

	return (
		<>
			<div className="container mx-auto navbar bg-gray-50">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItems}
						</ul>
					</div>
					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<div className="h-14 w-14">
							<img src={logo} className="h-full w-full" alt="" />
						</div>
					</a>
				</div>
				<div className="navbar-end">
					<div className=" hidden lg:flex">
						<ul className="menu menu-horizontal px-1">{navItems}</ul>
					</div>

					{user && (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img
										src={
											user?.photoURL ||
											"https://img.freepik.com/premium-vector/businessman-icon-vector_52756-255.jpg"
										}
										alt={user?.displayName}
										title={user?.displayName}
									/>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a> {user?.email} </a>
								</li>
								<li>
									<a onClick={logOutHandle}>Logout</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
