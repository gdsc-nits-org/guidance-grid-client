import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import styles from "./ArticleCard.module.scss";
import TagItem from "../TagItem/TagItem";

const ArticleCard = ({ data }) => {
  const [bookmarked, setBookmark] = useState(data?.bookmarked);
  const handleBookmark = () => {
    /* Make requests to backend to update bookmark */
    setBookmark((prevState) => !prevState);
  };

  return (
    <div className={styles.main}>
      <div className={styles.metadata}>
        <Link to={data?.authorprofile}>
          <img height="15" src={data?.authorprofileimage} alt="Profile of author" />
        </Link>
        <span className={styles.bold}>{data?.author}</span>
        in
        <span className={styles.bold}>{data?.domain}</span>
      </div>
      <div className={styles.heading}>
        <Link to={`/posts/${data?.id}`}>
          <div className={styles.title}>{data?.title}</div>
        </Link>
        <Icon
          icon={
            bookmarked ? "material-symbols:bookmark" : "material-symbols:bookmark-outline"
          }
          height="30"
          onClick={handleBookmark}
        />
      </div>
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
