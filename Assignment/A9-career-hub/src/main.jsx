import React, { Children, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Job_Details from "./components/Job_Details/Job_Details";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/featuredJob.json"),
			},
			{
				path: "/job_details/:jobId",
				element: <Job_Details />,
				loader: () => fetch("/featuredJob.json"),
			},
			{
				path: "/appliedjobs",
				element: <AppliedJobs />,
				loader: () => fetch("/featuredJob.json"),
			},
			{
				path: "/statistics",
				element: <Statistics />,
				loader: () => fetch("assignment_mark.json"),
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
