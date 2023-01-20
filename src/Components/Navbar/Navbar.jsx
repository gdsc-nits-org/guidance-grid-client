import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useEvent } from "../../Hooks";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEvent("scroll", changeToggle);

  return (
    <nav className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}>
      <Link className={styles.left} to="/">
        <img src="/images/gg.svg" alt="logo" />
      </Link>
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
            to="/resources"
          >
            Resources
          </NavLink>
          <Link className={`${styles.profile} ${styles.active}`} to="/user/profile">
            <Icon icon="healthicons:ui-user-profile" width="37" height="37" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
