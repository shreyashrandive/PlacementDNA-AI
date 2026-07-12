import { Navigate } from "react-router-dom";

import {
    getToken,
    getUser
} from "../api/authService";

function RoleProtectedRoute({ children, allowedRoles }) {

    // Check if user is logged in
    const token = getToken();

    if (!token) {
        return <Navigate to="/" replace />;
    }

    // Get logged-in user
    const user = getUser();

    // Check if user data exists
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // Check if user's role is allowed
    if (!allowedRoles.includes(user.role)) {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    // Allow access
    return children;
}

export default RoleProtectedRoute;