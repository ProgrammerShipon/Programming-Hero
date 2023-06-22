import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	console.log("header -> ", user);

	const navOptions = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>

			<li>
				<NavLink to="/menu">Our Menu</NavLink>
			</li>

			<li>
				<NavLink to="/order">Order</NavLink>
			</li>

			<li>
				<NavLink to="#">
					{user?.email && (
						<div className="indicator">
							<span className="indicator-item badge badge-secondary">0</span>
							<button className="py-3 px-3">
								<FaShoppingCart className="text-xl" />
							</button>
						</div>
					)}
				</NavLink>
			</li>

			<li>{!user?.email && <NavLink to="/login">Login</NavLink>}</li>
		</>
	);

	return (
		<div>
			<div className="navbar z-10 text-white bg-opacity-30 max-w-screen-xl fixed bg-black">
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-gray-800 w-52"
						>
							{navOptions}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navOptions}</ul>
				</div>
				<div className="navbar-end">
					{user?.email && (
						<>
							{user?.email}
							<button onClick={() => logOut()} className="btn ml-1">
								{" "}
								LogOut
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
