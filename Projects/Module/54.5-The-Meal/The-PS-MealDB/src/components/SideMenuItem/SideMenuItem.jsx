import React from "react";
import { Link } from "react-router-dom";

const SideMenuItem = ({ menu }) => {
   const {name, href, icons} = menu

	return (
		<>
			<li className="hover:bg-red-400">
				<Link to={`${href}`}>
					{icons}
				</Link>
			</li>
		</>
	);
};

export default SideMenuItem;
