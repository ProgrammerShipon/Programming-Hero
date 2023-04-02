import React, { useState } from "react";
import Link from "./Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [open, setOpen] = useState(true);

	const routes = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "About", path: "/about" },
		{ id: 3, name: "Contact", path: "/contact" },
		{ id: 4, name: "Blog", path: "/blog" },
		{ id: 5, name: "Products", path: "/products" },
		{ id: 6, name: "Services", path: "/services" },
		{ id: 7, name: "FAQ", path: "/faq" },
	];

	return (
		<nav>
			<div className="cursor-pointer md:hidden  duration-[1s]">
				<span>
					{open ? (
						<XMarkIcon
							className="h-6 w-6 text-red-500"
							onClick={() => setOpen(!open)}
						/>
					) : (
						<Bars3Icon
							className="h-6 w-6 text-purple-500"
							onClick={() => setOpen(!open)}
						/>
					)}
				</span>
			</div>
			<ul
				className={`md:flex absolute md:static transition duration-[1s] py-2 bg-purple-400 ${
					open ? top - 10 : -top - 10
				} `}
			>
				{open && routes.map((route) => <Link key={route.id} route={route} />)}
			</ul>
		</nav>
	);
};

export default Navbar;
