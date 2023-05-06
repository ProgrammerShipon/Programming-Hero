import React from "react";

const ErrorPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<span className="text-5xl mb-5">😕</span>
			<h1 className="text-4xl mb-2">Page Not Found</h1>
			<p className="text-lg text-gray-600 mb-5">
				Sorry, the page you are looking for cannot be found. Please check the
				URL and try again.
			</p>
			<a href="/" className="main-btn">
				Go back to the homepage
			</a>
		</div>
	);
};

export default ErrorPage;
