import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import './App.css';

function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  return (
    <nav>
      <div className="nav-brand">BrightTech</div>
      <div className="nav-links">
        {isHome ? null : (
          <>
            <Link to="/login" className={isLogin ? "active" : ""}>Login</Link>
            <Link to="/signup" className={isSignup ? "active" : ""}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={localStorage.getItem("token") ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
