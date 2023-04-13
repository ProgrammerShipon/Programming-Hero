import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Phones from "./components/Phones";
import Phone from "./components/Phone";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/phones",
				element: <Phones />,
				loader: () => fetch("http://localhost:5000/phones"),
			},
			{
				path: "/phone/:id",
				element: <Phone />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/phones/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
