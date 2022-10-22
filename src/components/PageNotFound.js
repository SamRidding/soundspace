import React from "react";
import styles from "../styles/PageNotFound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.PNFcontain}>
      <Link to={"/"} className={styles.PNFlink}>
        <div className={styles.PNFmessage}>
          <i className="fas fa-exclamation-circle fa-5x"></i>
          <h1>Page not found</h1>
          <p>Click here to return to the home page</p>
        </div>
      </Link>
    </div>
  );
};

export default PageNotFound;
