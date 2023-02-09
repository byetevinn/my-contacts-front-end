import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default RoutesMain;
