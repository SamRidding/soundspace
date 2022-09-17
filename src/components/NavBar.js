import React from "react";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContexts";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const uploadLink = (
    <NavLink className={styles.NavLink} to="/tracks/upload">
      <li>Upload</li>
    </NavLink>
  );
  const loggedInLinks = (
    <>
      <div className={styles.Navlinks}>
        <ul className={styles.Navlist}>
          <NavLink className={styles.NavLink} to="/">
            <li>{currentUser?.username}</li>
          </NavLink>
          <NavLink className={styles.NavLink} to="/">
            <li>Log Out</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
  const loggedOutLinks = (
    <>
      <div className={styles.Navlinks}>
        <ul className={styles.Navlist}>
          <NavLink className={styles.NavLink} to="/signup">
            <li>Sign Up</li>
          </NavLink>
          <NavLink className={styles.NavLink} to="/login">
            <li>Log In</li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav className={styles.Nav}>
      <div className={styles.NavLeft}>
        <div className="LogoContain">
          <NavLink className={styles.Logo} to="/">
            <h1>Logo</h1>
          </NavLink>
        </div>
        <div>{currentUser && uploadLink}</div>
      </div>
      {currentUser ? loggedInLinks : loggedOutLinks}
    </nav>
  );
};

export default NavBar;
