import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tabs/style/react-tabs.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routes.jsx";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
		<Toaster />
	</React.StrictMode>
);
