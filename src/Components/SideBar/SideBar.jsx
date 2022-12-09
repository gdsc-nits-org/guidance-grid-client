import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import sidebarData from "./sidebarData.json";

const SideBar = () => {
  const [tagArray] = useState(sidebarData.tag);
  const [bookmarkArray] = useState(sidebarData.bookmark);

  return (
    <div className={styles.main}>
      <div className={styles.searchTags}>
        <h4>Search by tags</h4>
        {tagArray.slice(0, 15).map((tag, idx) => {
          return (
            <span key={idx}>
              <Link to="/">{tag.tag}</Link>
            </span>
          );
        })}
      </div>

      <div className={styles.bookmarks}>
        <h4>Search by tags</h4>
        {bookmarkArray.slice(0, 5).map((mark) => {
          return (
            <Link to="/" key={mark.id}>
              {mark.markedContent}
            </Link>
          );
        })}

        <Link href="/">Read more</Link>
      </div>
    </div>
  );
};

export default SideBar;
