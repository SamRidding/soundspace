import React from "react";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.Nav}>
      <div className="LogoContain">
        <NavLink className={styles.Logo} to="/">
          <h1>Logo</h1>
        </NavLink>
      </div>
      <div className={styles.Navlinks}>
        <ul className={styles.Navlist}>
          <NavLink className={styles.NavLink} to="/signup">
            <li>Sign Up</li>
          </NavLink>
          <NavLink className={styles.NavLink} to="login">
            <li>Log In</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
