import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="bg-[#f9f9ff]">
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
