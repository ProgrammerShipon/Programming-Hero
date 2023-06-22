import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/order",
				element: <Order />,
			},
			{
				path: "/order/:category",
				element: <Order />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signUp",
				element: <SignUp />,
			},
		],
	},
]);

export default Routes;
