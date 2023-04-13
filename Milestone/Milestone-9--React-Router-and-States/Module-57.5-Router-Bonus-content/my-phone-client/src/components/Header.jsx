import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<nav>
				<Link to="/"> Home </Link>
				<Link to="/phones"> Phone </Link>
				<Link to=""> Phone </Link>
			</nav>
		</div>
	);
};

export default Header;
