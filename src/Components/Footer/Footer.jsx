import React from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.footer_list_side}>
          <h3 className={styles.footer_list_header}>About</h3>
          <div className={styles.yellow} />
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Vision
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Mission
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Types of Events
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Google Technologies
            </a>
          </div>
        </div>

        <div className={styles.footer_list_middle}>
          <h2 className={styles.footer_list_head}>Questions?</h2>
          <div className={styles.text}>Contact us through our social media accounts</div>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/gdscnits" target="_blank">
              <Icon icon="ri:facebook-circle-line" width={40} />
            </a>
            <a href="https://github.com/gdsc-nits-org" target="_blank">
              <Icon icon="carbon:logo-github" width="40" />
            </a>
            <a href="https://www.linkedin.com/company/gdscnits" target="_blank">
              <Icon icon="ion:logo-linkedin" width="40" />
            </a>
            <a href="https://www.instagram.com/gdsc_nits/" target="_blank">
              <Icon icon="ri:instagram-line" width="40" />
            </a>
          </div>
          <div className={styles.text}>
            or email us at <a href="mailto:gdsc@nits.ac.in">gdsc@nits.ac.in</a>
          </div>
        </div>

        <div className={styles.footer_list_side}>
          <h3 className={styles.footer_list_header}>Team</h3>
          <div className={styles.red}> </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Executive Board
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Departments
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              Join Us
            </a>
          </div>
        </div>
      </div>
      <div className={styles.logo}></div>
    </>
  );
};

export default Footer;
