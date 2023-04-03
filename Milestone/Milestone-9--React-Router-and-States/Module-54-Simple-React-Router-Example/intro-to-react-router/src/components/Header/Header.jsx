import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
	return (
		<nav>
			<Link to="/"> Home </Link>
			<Link to="/friends">Friends</Link>
			<Link to="/posts">Posts</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/about">About</Link>
		</nav>
	);
};

export default Header;
