import React, { useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState(null);

	const handleGoogleSignIn = () => {
		// console.log("google mama is coming ");
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				console.log("error ", error.message);
			});
	};

	const handleGithubSignIn = () => {
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setUser(user);
			})
			.catch((error) => console.log(error.message));
	};

	const handleSignOut = () => {
		signOut(auth)
			.then((result) => {
				console.log(result);
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	console.log(user);

	return (
		<div>
			{user ? (
				<button onClick={handleSignOut}>Sign out</button>
			) : (
				<div>
					<button onClick={handleGoogleSignIn}> Google Login </button>
					<button onClick={handleGithubSignIn}> Github Login </button>
				</div>
			)}

			{user && (
				<div>
					<h3> User : {user?.displayName} </h3>
					<p> Email : {user?.email} </p>
					<img src={user?.reloadUserInfo?.photoUrl || user?.photoUrl} alt="" />
				</div>
			)}
		</div>
	);
};

export default Login;
