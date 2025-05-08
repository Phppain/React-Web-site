import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="kda-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">K/DA SHOP</Link>
        </div>

        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} K/DA SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};