import React from "react";
import Cookie from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Outlet, Route } from "react-router-dom";

const ProtectedRoute = ({}) => {
	const user_id = Cookie.get("user_id");
	if (user_id === undefined) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default ProtectedRoute;
