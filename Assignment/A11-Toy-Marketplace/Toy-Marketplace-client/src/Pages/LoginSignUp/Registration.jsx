import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useTitle from "../useTitle";

const Registration = () => {
	useTitle("Registration");
	const location = useLocation();
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const { signUp, setLoading, logOut } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = e.target;
		const name = form.name.value;
		const photoUrl = form?.photoUrl?.value;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setError("password must be at least 6 characters");
			return;
		}

		const userInfo = {
			displayName: name,
			photoURL: photoUrl,
		};

		signUp(email, password)
			.then((result) => {
				toast.success("Registration successfully");

				const user = result.user;
				updateProfile(user, userInfo);

				navigate("/login", { replace: true });
				form.reset();
			})
			.catch((err) => {
				console.error(err);
				toast.error("Registration failed");
				setError("Check your email and try again");
			});
	};

	return (
		<div>
			<div className="flex justify-center items-center bg-gray-100">
				<div className="py-14">
					<div className="sm:mx-auto sm:w-full sm:max-w-md mb-4 md:mb-6 lg:mb-8">
						<h2 className="text-center text-3xl font-extrabold text-gray-900 uppercase">
							New account
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Or&nbsp;
							<Link
								to="/login"
								className="font-medium text-indigo-600 hover:underline hover:text-indigo-400"
							>
								already account
							</Link>
						</p>
					</div>

					<div className="bg-white p-6 rounded shadow-xl w-72 md:w-80">
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-sm font-semibold mb-1"
								>
									Name :
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="photoUrl"
									className="block text-sm font-semibold mb-1"
								>
									Photo Url :
								</label>
								<input
									type="text"
									id="photoUrl"
									name="photoUrl"
									return
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-sm font-semibold mb-1"
								>
									Email :
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full p-2 border border-gray-300 rounded"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="password"
									className="block text-sm font-semibold mb-1"
								>
									Password :
								</label>
								<input
									type="password"
									id="password"
									name="password"
									required
									className="w-full p-2 border border-gray-300 rounded"
								/>
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
								Registration
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
