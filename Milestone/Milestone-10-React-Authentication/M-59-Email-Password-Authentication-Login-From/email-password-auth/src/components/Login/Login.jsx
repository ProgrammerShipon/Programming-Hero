import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [showPw, setShowPw] = useState(true);
	const emailRef = useRef();

	const handleLogin = (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(`Email: ${email}, Password: ${password}`);

		setError("");
		setSuccess("");

		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setError("Please add at least two uppercase.");
			return;
		} else if (!/(?=.*[!@#$&*])/.test(password)) {
			setError("Please add a special character");
			return;
		} else if (password.length < 6) {
			setError("Password must be 6 characters long");
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				setSuccess("User login Successful");
				setError("");
			})
			.catch((error) => setError(error.message));
	};

	const resetPassword = () => {
		const email = emailRef.current.value;
		console.log(email);

		if (!email) {
			alert("Please provide your email address to reset password");
		}
		sendPasswordResetEmail(auth, email);
	};

	return (
		<div>
			<Form className="login-form" onSubmit={handleLogin}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						ref={emailRef}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						style={{ marginBottom: "5px" }}
						type={showPw ? "password" : "text"}
						placeholder="Enter Password"
						name="password"
					/>

					<div>
						<p
							className="btn btn-link d-block  text-start"
							onClick={() => setShowPw(!showPw)}
						>
							<small> Show Password </small>
						</p>
						<p>
							<small>
								{" "}
								Forget Password ?
								<span
									className="btn btn-link text-start"
									onClick={resetPassword}
								>
									Reset Password
								</span>
							</small>
						</p>
					</div>
				</Form.Group>

				<Button className="login-btn" variant="primary" type="submit">
					Login
				</Button>

				<p>
					<small>
						New to this website? Please <Link to="/register"> Register </Link>
					</small>
				</p>

				<p className="text-danger mt-3">{error}</p>
				<p className="text-success mt-3">{success}</p>
			</Form>
		</div>
	);
};

export default Login;
