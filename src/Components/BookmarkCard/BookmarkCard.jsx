import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import styles from "./BookmarkCard.module.scss";

const BookmarkCard = ({ data }) => {
  const [bookmarked, setBookmark] = useState(data.bookmarked);
  const handleBookmark = () => {
    /* Make requests to backend to update bookmark */
    setBookmark((prevState) => !prevState);
  };
  const controlIcons = [
    {
      filledIcon: "material-symbols:bookmark",
      outlinedIcon: "material-symbols:bookmark-outline",
      iconState: bookmarked,
      iconStateHandler: handleBookmark,
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <Link to={`/posts/${data?.id}`}>
          <div className={styles.title}>{data?.title}</div>
        </Link>
      </div>
      <div className={styles.subheading}>{data?.content}</div>
      <div className={styles.metadata}>
        <Link className={styles.profile} to={data.author.profile}>
          <img height={25} alt="author" src={data?.author?.image} />
          <div>
            <span className={styles.boldsmall}>{data?.author?.name}</span>
            <div className={styles.info}>
              <span>
                {data?.metadata?.views > 1000
                  ? `${(data.metadata.views / 1000).toFixed(1)}k views`
                  : `${data?.metadata?.views} views`}
              </span>
              <span>
                {data?.metadata?.upvotes > 1000
                  ? `${(data.metadata.upvotes / 1000).toFixed(1)}k upvotes`
                  : `${data?.metadata?.upvotes} upvotes`}
              </span>
            </div>
          </div>
        </Link>
        <div className={styles.controls}>
          {controlIcons.map((item, index) => {
            return (
              <Icon
                id={index}
                key={index}
                className={styles.icon}
                icon={item.iconState ? item.filledIcon : item.outlinedIcon}
                height="30"
                onClick={item.iconStateHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
