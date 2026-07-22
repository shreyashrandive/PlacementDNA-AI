import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import Students from "../pages/Students";
import Company from "../pages/Company";
import PlacementDrive from "../pages/PlacementDrive";
import Resume from "../pages/Resume";
import AIResumeAnalysis from "../pages/AIResumeAnalysis";

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

<Route
  path="/company"
  element={<Company />}
/>

<Route
  path="/placement-drive"
  element={<PlacementDrive />}
/>

<Route
  path="/resume"
  element={<Resume />}
/>

<Route
    path="/ai-analysis"
    element={<AIResumeAnalysis />}
/>

</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;