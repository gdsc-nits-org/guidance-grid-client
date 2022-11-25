import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import TagItem from "../TagItem/TagItem";

const ArticleCard = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.metadata}>
        <span className={styles.bold}>{data?.author}</span>
        in
        <span className={styles.bold}>{data?.domain}</span>
      </div>
      <Link to={`/posts/${data?.id}`}>
        <div className={styles.heading}>{data?.title}</div>
      </Link>
      <div className={styles.subheading}>{data?.content}</div>
      <div className={styles.metadata}>
        <div className={styles.text}>{data?.date}</div>
        <div className={styles.text}>10 mins read</div>
        <div className={styles.tags}>
          {data?.tags.map((item, index) => {
            return <TagItem text={item} id={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
