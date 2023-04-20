import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<nav className="header">
			<div className="header__logo">
				<Link to="/">PS</Link>
			</div>
			<div className="header__links">
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
				<Link to="/register-rbs">Register RBS</Link>
			</div>
		</nav>
	);
};

export default Header;
