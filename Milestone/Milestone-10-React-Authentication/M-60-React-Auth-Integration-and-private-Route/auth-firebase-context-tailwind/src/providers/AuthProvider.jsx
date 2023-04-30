/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const userInfo = {
		user,
		createUser,
		loginUser,
	};

	return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
