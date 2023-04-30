/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className="navbar bg-primary text-primary-content">
				<a className="btn btn-ghost normal-case text-xl">Auth-Master</a>

				<NavLink className="btn btn-ghost normal-case text-sm" to="/">
					{" "}
					Home{" "}
				</NavLink>
				<NavLink className="btn btn-ghost normal-case text-sm" to="/login">
					{" "}
					Login{" "}
				</NavLink>
				<NavLink className="btn btn-ghost normal-case text-sm" to="/register">
					{" "}
					Register{" "}
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
