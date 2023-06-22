import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shayed/Footer";
import Header from "../Pages/Shayed/Header";

const Main = () => {
	const location = useLocation();

	const noHeaderFooter =
		location.pathname.includes("login") || location.pathname.includes("signup");

	return (
		<div>
			{!noHeaderFooter && <Header />}

			<Outlet />

			{!noHeaderFooter && <Footer />}
		</div>
	);
};

export default Main;
