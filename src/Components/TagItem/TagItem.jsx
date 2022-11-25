import React from "react";
import { Link } from "react-router-dom";
import styles from "./TagItem.module.scss";

const TagItem = ({ text = "tagitem" }) => {
  return (
    /* Just putting a random url for testing purposes. Will change once backend is ready */
    <Link to={`/tags/${text}`}>
      <div className={styles.tagitem}>{text}</div>
    </Link>
  );
};

export default TagItem;
