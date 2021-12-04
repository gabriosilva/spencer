import { Routes, Route, Navigate } from "react-router-dom";

// elements
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// contexts
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

// handles authorization based route control
function PrivateRoute({ children }: any) {
  const { isAuth, loading } = useContext(AuthContext);
  return isAuth || loading ? children : <Navigate to="/login" replace />;
}

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="" element={<div>supersecret</div>} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
