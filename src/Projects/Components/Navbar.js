import React, { useState } from "react";
import { FaTimes, FaBars, FaLowVision } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li><Link to="/" onClick={() => seticon(!icon)}>Women</Link></li>
        <li><Link to="/men" onClick={() => seticon(!icon)} >Men</Link></li>
        <li><Link to="/company" onClick={() => seticon(!icon)}>Company</Link></li>
        <li><Link to="/products" onClick={() => seticon(!icon)}>Products</Link></li>
        <li><Link to="/sign" onClick={() => seticon(!icon)}>Sign In</Link></li>
        <li><Link to="/create" onClick={() => seticon(!icon)}>Create Account</Link></li>

      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
