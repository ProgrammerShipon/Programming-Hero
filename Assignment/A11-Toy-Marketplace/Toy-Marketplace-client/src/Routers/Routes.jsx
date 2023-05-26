import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSignUp/Login";
import AllToys from "../Pages/AllToys/AllToys";
import ErrorPage from "../Pages/Error";
import Registration from "../Pages/LoginSignUp/Registration";
import AddAToy from "../Pages/AddAToy/AddAToy";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import ToyUpdate from "../Pages/MyToys/ToyUpdate";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
			{
				path: "all-toys",
				element: <AllToys />,
			},
			{
				path: "toy/:id",
				element: (
					<PrivateRoute>
						<ToyDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://toy-marketplace-server-khaki-mu.vercel.app/singleToy/${params.id}`
					),
			},
			{
				path: "toyUpdate/:id",
				element: (
					<PrivateRoute>
						<ToyUpdate />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://toy-marketplace-server-khaki-mu.vercel.app/singleToy/${params.id}`
					),
			},
			{
				path: "add-a-toy",
				element: (
					<PrivateRoute>
						<AddAToy />
					</PrivateRoute>
				),
			},
			{
				path: "my-toys",
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "registration",
				element: <Registration />,
			},
		],
	},
]);

export default router;
