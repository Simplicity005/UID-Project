import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        CineSphere
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        {user ? (
          <>
            <Link to="/movie/1">Preview</Link>
            <button className="link-button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
