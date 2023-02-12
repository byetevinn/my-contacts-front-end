import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";

import Login from "../pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default RoutesMain;
