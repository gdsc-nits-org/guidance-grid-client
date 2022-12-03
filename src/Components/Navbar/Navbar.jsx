import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import styles from "./Navbar.module.scss";
import logo from "./GDSC-Logo.png";

const Navbar = () => {
  const [isActiveHome, setisActiveHome] = useState(true);
  const [isActiveResources, setisActiveResources] = useState(false);

  const handleClickHome = () => {
    setisActiveHome(true);
    setisActiveResources(false);
  };

  const handleClickResources = () => {
    setisActiveResources(true);
    setisActiveHome(false);
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
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
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <button className={styles.toggleIcon} onClick={handleToggle}>
          {toggle ? (
            <iconify-icon icon="maki:cross" width="37"></iconify-icon>
          ) : (
            <iconify-icon
              icon="charm:menu-hamburger"
              width="37"
              height="37"
            ></iconify-icon>
          )}
        </button>
        <div className={styles.links}>
          <a
            className={
              isActiveHome ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            onClick={handleClickHome}
            onKeyDown={handleClickHome}
            href="/"
          >
            Home
          </a>
          <a
            className={
              isActiveResources ? `${styles.navlinks} ${styles.active}` : styles.navlinks
            }
            onClick={handleClickResources}
            onKeyDown={handleClickResources}
            href="/"
          >
            Resources
          </a>
          <div className={`${styles.profile} ${styles.active}`}>
            <Icon icon="healthicons:ui-user-profile" width="37" height="37" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
