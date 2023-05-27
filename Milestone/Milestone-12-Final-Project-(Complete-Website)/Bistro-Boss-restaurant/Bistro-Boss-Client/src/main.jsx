import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<div className="max-w-screen-xl mx-auto">
				<RouterProvider router={Routes} />
			</div>
		</HelmetProvider>
	</React.StrictMode>
);
