import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feauters/auth/authSlice.js";
import "./Header.css";

export const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  
  const dispatch = useDispatch();

  return (
    <header className="kda-header">
      <div className="kda-container">
        <div className="logo">
          <Link to="/">K/DA SHOP</Link>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          {isAuthenticated && <NavLink to="/cart">Cart</NavLink>}
        </nav>
        <div className="auth">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user.email}</span>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="login-button">Login</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};