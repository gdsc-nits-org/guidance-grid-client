import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import styles from "./Navbar.module.scss";
// import logo from "./GDSC-Logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggleValue => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);

  return (
    <nav className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}>
      <div className={styles.left}>
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <Icon icon="maki:cross" width="37"></Icon>
          ) : (
            <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
          )}
        </button>
        <div className={styles.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            to="/dc"
          >
            Resources
          </NavLink>
          <div className={`${styles.profile} ${styles.active}`}>
            <Icon icon="healthicons:ui-user-profile" width="37" height="37" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
