import React from "react";
import SideMenuItem from "../SideMenuItem/SideMenuItem";
import {
	UsersIcon,
	ChatBubbleBottomCenterIcon,
	ClipboardIcon,
	CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const menuItems = [
	{
		id: 1,
		name: "Home",
		href: "/home",
		icons: <HomeIcon className="h-6 w-6 text-gray-500" />,
	},
	{
		id: 2,
		name: "User",
		href: "/user",
		icons: <UsersIcon className="h-6 w-6 text-gray-500" />,
	},
	{
		id: 3,
		name: "Message",
		href: "/message",
		icons: <ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray-500" />,
	},
	{
		id: 4,
		name: "Check It",
		href: "/checkit",
		icons: <ClipboardIcon className="h-6 w-6 text-gray-500" />,
	},
	{
		id: 5,
		name: "Calendar",
		href: "/calendar",
		icons: <CalendarDaysIcon className="h-6 w-6 text-gray-500" />,
	},
];

const Layout = () => {
	return (
		<div className="flex">
			<div className="p-4 w-28 bg-bgP">
				<div>
					<h1 className="text-3xl text-center mb-4 text-white">PS</h1>
				</div>
				<div>
					<ul className="menu text-base-content">
						{/* Sidebar content here */}
						{menuItems.map((menuItem) => (
							<SideMenuItem key={menuItem.id} menu={menuItem} />
						))}
					</ul>
				</div>
			</div>
			<div className="bg-blue-100 w-full">
				<div>
					<Header />
				</div>
				<div className="p-8">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
