import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import Students from "../pages/Students";

import ProtectedRoute from "../components/ProtectedRoute";

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
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/analytics"
    element={
      <ProtectedRoute>
        <DashboardAnalytics />
      </ProtectedRoute>
    }
  />

  <Route
    path="/students"
    element={
      <ProtectedRoute>
        <Students />
      </ProtectedRoute>
    }
  />

</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;