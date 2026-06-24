import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import Students from "../pages/Students";

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
          element={<Dashboard />}
        />

        <Route
           path="/analytics"
           element={<DashboardAnalytics />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;