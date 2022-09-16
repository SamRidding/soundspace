import React, { useContext } from "react";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
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
    </>
  );

  return (
    <nav className={styles.Nav}>
      <div className="LogoContain">
        <NavLink className={styles.Logo} to="/">
          <h1>Logo</h1>
        </NavLink>
      </div>
      {currentUser ? loggedInIcons : loggedOutIcons}
    </nav>
  );
};

export default NavBar;
