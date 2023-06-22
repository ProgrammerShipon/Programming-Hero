import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState([]);

	const ProviderGoogle = new GoogleAuthProvider();

	const googleLogin = () => {
		return signInWithPopup(auth, ProviderGoogle);
	};

	const signUp = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			return unSubscribe();
		};
	}, []);

	console.log("Auth Provider -> ", user);

	const authInfo = {
		user,
		loading,
		setLoading,
		googleLogin,
		signUp,
		login,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
