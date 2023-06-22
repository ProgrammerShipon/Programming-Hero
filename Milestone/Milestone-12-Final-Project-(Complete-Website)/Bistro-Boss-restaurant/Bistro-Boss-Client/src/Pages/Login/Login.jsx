import {
	LoadCanvasTemplate,
	loadCaptchaEnginge,
	validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication.gif";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const { login, googleLogin } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const captchRef = useRef();
	const [isError, setError] = useState(null);
	const [isDisable, setDisable] = useState(false);

	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const captureHandle = () => {
		console.log(captchRef.current.value);
		if (validateCaptcha(captchRef.current.value)) {
			setError(null);
			setDisable(false);
		} else {
			setError("Captcha Does Not Match");
			setDisable(true);
		}
	};

	const loginHandle = (event) => {
		event.preventDefault();
		const form = event.target;
		const userEmail = form.userEmail.value;
		const password = form.password.value;

		console.log(form);
		console.log({ userEmail, password });

		if (password.length < 6) {
			setError("password must be at least 6 characters");
			return;
		}

		login(userEmail, password)
			.then((result) => {
				setError(null);
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError("Email or Password Not Match");
			});
	};

	const googleHandle = () => {
		googleLogin()
			.then((result) => {
				setError(null);
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col md:flex-row">
					<div className="text-center lg:text-left md:w-1/2">
						<div className="text-center mx-auto">
							<img className="w-11/12 rounded-lg shadow-lg" src={loginImg} />
						</div>
					</div>

					<div className="card w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
						<form onSubmit={loginHandle}>
							<div className="card-body">
								<h1 className="text-3xl font-bold text-center mb-4">
									{" "}
									Login now{" "}
								</h1>

								<div className="form-control">
									<label className="label" htmlFor="Email">
										<span className="label-text">Password</span>
									</label>

									<input
										type="email"
										placeholder="Enter Email"
										id="Email"
										name="userEmail"
										className="input input-bordered"
									/>
								</div>

								<div className="form-control">
									<label className="label" htmlFor="password">
										<span className="label-text">Password</span>
									</label>

									<input
										type="password"
										placeholder="password"
										id="password"
										name="password"
										className="input input-bordered"
									/>

									<label className="label">
										<a href="#" className="label-text-alt link link-hover">
											Forgot password?
										</a>
									</label>
								</div>

								<div className="form-control">
									<LoadCanvasTemplate />

									<input
										type="text"
										placeholder="write capture text "
										id="email"
										ref={captchRef}
										onBlur={captureHandle}
										name="captureField"
										className="input input-bordered"
									/>
								</div>

								{isError && (
									<div className="text-red-400" role="alert">
										{isError}
									</div>
								)}

								<div className="form-control mt-6">
									<input
										type="submit"
										className="btn border-0 border-b-[2px] btn-outline btn-success font-semibold duration-300"
										disabled={isDisable}
										value="Login"
									/>
								</div>
							</div>
						</form>
						<p className="text-center py-2">
							<small>
								New Here? <Link to="/signup">Create an account</Link>{" "}
							</small>
						</p>

						<div className="text-center py-2 mb-5">
							<span
								onClick={googleHandle}
								className="text-2xl text-blue-400 border font-bold py-2 px-4  rounded-full hover:bg-slate-200 transition cursor-pointer"
							>
								G
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
