import React from "react";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/">
        <div className={styles.Logo}>
          <h1>Logo</h1>
        </div>
      </NavLink>
      <div className={styles.Navlinks}>
        <ul className={styles.Navlink}>
          <NavLink to="/signup">
            <li>
              <a>Sign Up</a>
            </li>
          </NavLink>
          <NavLink to='login'>
            <li>
              <a>Log In</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
