import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../Components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <Loading />;
	}

	// Loading return
	if (user?.email) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
