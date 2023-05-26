import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Main = () => {
	return (
		<>
			<div className="divide-y border-gray-400">
				<div className="shadow-lg bg-gray-50">
					<Header />
				</div>

				<main className="bg-gray-100 py-8">
					<Outlet />
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Main;
