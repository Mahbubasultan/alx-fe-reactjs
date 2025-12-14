import { Navigate } from "react-router-dom";

const isAuthenticated = true; // شبیه‌سازی وضعیت ورود کاربر

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
