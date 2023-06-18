import React from "react";
import styles from "./DeveloperCard.module.scss";

const DeveloperCard = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.devpic}>
        <img src={data?.image} alt="Developer pic" />
      </div>
      <div className={styles.credentials}>
        <div className={styles.name}>{data?.name}</div>
        <div className={styles.position}>{data?.position}</div>
      </div>
    </div>
  );
};

export default DeveloperCard;
