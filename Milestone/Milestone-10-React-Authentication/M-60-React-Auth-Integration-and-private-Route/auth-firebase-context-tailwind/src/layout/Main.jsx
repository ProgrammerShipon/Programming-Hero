/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
	return (
		<div>
			<Header></Header>

			<Outlet></Outlet>
		</div>
	);
};

export default Main;
