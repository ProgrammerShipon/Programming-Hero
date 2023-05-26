import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../useTitle";

const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState(null);
	const { user, googleLogin, setLoading, login } = useContext(AuthContext);
	useTitle("Login");

	let from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user) {
			return navigate(from, { replace: true });
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setError("password must be at least 6 characters");
			return;
		}

		login(email, password)
			.then((result) => {
				toast.success("Login Success");
				setError(null);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError("Email or Password Not Match");
			});
	};

	const handleGoogleAuth = () => {
		setLoading(true);

		googleLogin()
			.then((data) => {
				toast.success("Google Login Success");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				toast.error("Sign in Failed");
			});
	};

	const handleForgotPassword = () => {};

	return (
		<div className="flex justify-center items-center bg-gray-100">
			<div className="py-14">
				<div className="sm:mx-auto sm:w-full sm:max-w-md mb-4 md:mb-6 lg:mb-8">
					<h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase">
						Login your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or&nbsp;
						<Link
							to="/registration"
							className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
						>
							create a new account
						</Link>
					</p>
				</div>

				<div className="bg-white p-8 rounded shadow-xl w-72 md:w-80">
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-semibold mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								required
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-semibold mb-1"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								required
								className="w-full p-2 border border-gray-300 rounded"
							/>

							<div className="text-right">
								<button
									type="button"
									className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
									onClick={handleForgotPassword}
								>
									Forgot Password?
								</button>
							</div>
						</div>

						{error && (
							<div className="mb-4">
								<p className="text-sm text-red-500">{error}</p>
							</div>
						)}

						<button
							type="submit"
							className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 mb-4"
						>
							Login
						</button>

						<div className="divider">OR</div>

						<div className="flex flex-col">
							<button
								type="button"
								className="w-full flex items-center justify-center py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
								onClick={handleGoogleAuth}
							>
								<FaGoogle className="mr-2" />
								Google
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
