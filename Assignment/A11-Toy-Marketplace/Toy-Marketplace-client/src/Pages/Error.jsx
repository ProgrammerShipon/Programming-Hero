import React from "react";
import Lottie from "react-lottie";
import errorImage from "../assets/error-image2.json";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useTitle from "./useTitle";

const ErrorPage = () => {
	useTitle("Error 404");
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: errorImage,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			{/* <div className="flex items-center justify-center h-screen bg-gray-200">
				<div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
					<h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
					<p className="text-xl text-gray-800 mb-6">Something went wrong.</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-24 w-24 text-red-600 mx-auto mb-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
					<p className="text-lg text-gray-600 mb-6">
						Don't worry, our team has been notified and we are working on fixing
						it.
					</p>
					<button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
						Go Back
					</button>
				</div>
			</div> */}

			<div className="text-center">
				<Lottie options={defaultOptions} height={500} width={500} />
				<Link to={"/"}>
					{" "}
					<button className="btn mt-5 btn inline-flex transition duration-300 text-[#18c4f7] border border-[#18c4f7] bg-transparent !py-2 !px-6 focus:outline-none hover:border-transparent hover:bg-[#18c4f7] hover:text-gray-600 rounded">
						<FaLongArrowAltLeft className="h-7 w-7 mr-3" />
						Go back to Home
					</button>{" "}
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
