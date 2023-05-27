import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shayed/Footer";
import Header from "../Pages/Shayed/Header";

const Main = () => {
	return (
		<div>
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
};

export default Main;
