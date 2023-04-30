// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
	const user = useContext(AuthContext);
	console.log(user);

	return (
		<div>
			<h1> This is Home Page {user && user.displayName} </h1>
		</div>
	);
};

export default Home;
