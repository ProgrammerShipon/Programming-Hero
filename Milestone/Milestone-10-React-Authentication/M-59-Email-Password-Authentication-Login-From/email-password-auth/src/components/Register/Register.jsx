import React from "react";

const Register = () => {
	const formHandle = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(email, password);
	};

	const emailHandle = (event) => {
		// console.log(event.target.value);
	};

	const passwordBlur = (event) => {
		// console.log(event.target.value);
	};

	return (
		<div>
			<h4> Please Register </h4>
			<form onSubmit={formHandle}>
				<input
					onChange={emailHandle}
					type="email"
					name="email"
					id="email"
					placeholder="Your Email"
				/>
				<br />
				<input
					onBlur={passwordBlur}
					type="password"
					name="password"
					id="password"
					placeholder="Your Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Register;
