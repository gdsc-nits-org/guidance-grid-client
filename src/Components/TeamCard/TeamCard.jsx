import React from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./TeamCard.module.scss";
const TeamCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={data.imageSource} alt="" />
      </div>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.socials}>
        <p>
          <a href={data.github}>
            <Icon icon="mdi:github" width="25" />
          </a>
        </p>
        <p>
          <a href={data.linkedin}>
            <Icon icon="mdi:linkedin" width="25" />
          </a>
        </p>
        <p>
          <a href={data.facebook}>
            <Icon icon="ri:facebook-fill" width="20" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
