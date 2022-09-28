import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContexts";
import UserPic from "./UserPic";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import logo from "../assets/logo.png";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {}
  };

  const uploadLink = (
    <NavLink className={styles.NavLink} to="/tracks/upload">
      Upload
    </NavLink>
  );

  const loggedInLinks = (
    <>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        {currentUser?.username}
        <UserPic src={currentUser?.profile_image} height={40} />
      </NavLink>
      <NavLink className={styles.NavLink} to="/feed">
        Feed
      </NavLink>
      {currentUser && uploadLink}
      <NavLink className={styles.NavLink} to="/" onClick={handleLogOut}>
        Log Out
      </NavLink>
    </>
  );
  const loggedOutLinks = (
    <>
      <NavLink className={styles.NavLink} to="/signup">
        Sign Up
      </NavLink>
      <NavLink className={styles.NavLink} to="/login">
        Log In
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.Nav} expand="md">
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.NavDropdown}>
        <Nav className="ml-auto text-left">
          {currentUser ? loggedInLinks : loggedOutLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
