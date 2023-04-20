import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [showPw, setShowPw] = useState(true);

	const auth = getAuth(app);

	const formHandle = (event) => {
		event.preventDefault();
		const name = event.target.userName.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		setSuccess("");
		setError("");

		console.log(name, email, password);

		if (!/(?=.*[A-Z])/.test(password)) {
			setError("Please add at least one uppercase");
			return;
		} else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
			setError("Please add at least two numbers");
			return;
		} else if (password.length < 6) {
			setError("Please add at least 6 characters in your password");
		}

		createUserWithEmailAndPassword(auth, email, name, password)
			.then((result) => {
				const loggedUser = result.user;
				setError("");
				event.target.reset();
				setSuccess("User has been created Successfully");
				console.log(loggedUser);
				sendVerification(loggedUser);
				updateUserData(loggedUser, name);
			})

			.catch((error) => {
				setError(error.message);
				console.error(error);
			});
	};

	const updateUserData = (user, name) => {
		updateProfile(user, {
			displayName: name,
		})
			.then(() => {
				console.log("user name updated");
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const sendVerification = (user) => sendEmailVerification(user);

	const emailHandle = (event) => {
		// console.log(event.target.value);
	};

	const passwordBlur = (event) => {
		// console.log(event.target.value);
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="">
					<div className="card">
						<div className="card-header">
							<h4>Register</h4>
						</div>
						<div className="card-body">
							<form onSubmit={formHandle}>
								<div className="mb-3">
									<label for="userName" className="form-label">
										Your Name
									</label>
									<input
										type="text"
										className="form-control"
										id="userName"
										placeholder="Your Name"
										required
									/>
								</div>

								<div className="mb-3">
									<label for="email" className="form-label">
										Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Your Email"
										onChange={emailHandle}
										required
									/>
								</div>

								<div className="mb-3">
									<label for="password" className="form-label">
										Password
									</label>
									<input
										style={{ marginBottom: "5px" }}
										type={showPw ? "password" : "text"}
										className="form-control"
										id="password"
										placeholder="Your Password"
										onBlur={passwordBlur}
										required
									/>
									<p
										className="btn btn-link d-block text-start"
										onClick={() => setShowPw(!showPw)}
									>
										Show Password
									</p>
								</div>

								<button type="submit" className="btn btn-primary">
									Register
								</button>
							</form>

							<p>
								<small>
									New to this website? Please <Link to="/login"> Login </Link>
								</small>
							</p>

							{error && <p className="text-danger mt-3">{error}</p>}
							{success && <p className="text-success mt-3">{success}</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
