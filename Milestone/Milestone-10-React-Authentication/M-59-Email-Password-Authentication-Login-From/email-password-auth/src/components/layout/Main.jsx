import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
	return (
		<div className="main-container d-flex justify-content-center align-items-center border-1">
			<div>
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
