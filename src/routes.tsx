import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

// elements
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// handles authorization based route control
function PrivateRoute({ children }: any) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" replace />;
}

function MainRoute() {
  const location = useLocation();
  // const transitions = useTransition(location,location.pathname, {
  //   from: { opacity: 0, transform: "translate(100%,0)" },
  //   enter: { opacity: 1, transform: "translate(0,0)" },
  //   leave: { opacity: 0, transform: "translate(100%,0)" },
  // })
  return (
    <Routes>
      <Route path="/" element={<div>a</div>} />
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
