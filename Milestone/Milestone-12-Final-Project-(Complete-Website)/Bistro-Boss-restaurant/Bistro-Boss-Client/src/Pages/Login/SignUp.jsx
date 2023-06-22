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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const { signUp } = useContext(AuthContext);
	const captchRef = useRef();
	const [isError, setError] = useState(null);
	const [isDisable, setDisable] = useState(true);

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

	const onSubmit = (data) => {
		console.log(data);
		signUp(data?.email, data?.password)
			.then((data) => {
				console.log("Current User -> ", data);
				reset();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "User created successfully.",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col md:flex-row-reverse">
					<div className="text-center lg:text-left md:w-1/2">
						<div className="text-center mx-auto">
							<img className="w-11/12 rounded-lg shadow-lg" src={loginImg} />
						</div>
					</div>

					<div className="card w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<h1 className="text-3xl font-bold text-center mb-4">
									{" "}
									Sign Up{" "}
								</h1>

								<div className="form-control">
									<label className="label" htmlFor="fullName">
										<span className="label-text">Full Name</span>
									</label>
									<input
										type="text"
										{...register("fullName")}
										placeholder="Full Name"
										id="fullName"
										className="input input-bordered"
									/>
								</div>

								<div className="form-control">
									<label className="label" htmlFor="email">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										id="email"
										name="email"
										{...register("email")}
										className="input input-bordered"
									/>
								</div>

								<div className="form-control">
									<label className="label" htmlFor="password">
										<span className="label-text">Password</span>
									</label>

									<input
										type="password"
										{...register("password")}
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
										placeholder="Write Capture Text "
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

								<div className="form-control mt-3">
									<input
										type="submit"
										className="btn border-0 border-b-[2px] btn-outline btn-success font-semibold duration-300"
										disabled={isDisable}
										value="Login"
									/>
								</div>
							</form>

							<Link className="text-center mt-3" to="/login">
								{" "}
								Already account{" "}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
