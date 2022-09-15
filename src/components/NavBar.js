import React from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.Nav}>
        <div className={styles.Logo}>
            <h1>Logo</h1>
        </div>
        <div className={styles.Navlinks}>
          <ul className={styles.Navlink}>
            <li>
              <a href='#'>Sign Up</a>
            </li>
            <li>
              <a href='#'>Log In</a>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar