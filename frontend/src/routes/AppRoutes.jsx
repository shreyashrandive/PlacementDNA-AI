import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import Students from "../pages/Students";

import ProtectedRoute from "../components/ProtectedRoute";
import RoleProtectedRoute from "../components/RoleProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
     <Routes>

  <Route
    path="/"
    element={<Login />}
  />

  <Route
  path="/dashboard"
  element={
    <RoleProtectedRoute
      allowedRoles={[
        "Admin",
        "Placement Officer",
        "Student"
      ]}
    >
      <Dashboard />
    </RoleProtectedRoute>
  }
/>

  <Route
  path="/analytics"
  element={
    <RoleProtectedRoute
      allowedRoles={["Admin", "Placement Officer"]}
    >
      <DashboardAnalytics />
    </RoleProtectedRoute>
  }
/>

  <Route
  path="/students"
  element={
    <RoleProtectedRoute
      allowedRoles={["Admin", "Placement Officer"]}
    >
      <Students />
    </RoleProtectedRoute>
  }
/>

</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;