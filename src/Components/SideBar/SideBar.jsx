import { useState } from "react";
import styles from "./SideBar.module.scss";
import sidebarData from "./sidebarData.json";
const SideBar = () => {
  const [tagArray] = useState(sidebarData.tag);
  const [bookmarkArray] = useState(sidebarData.bookmark);

  return (
    <div className={styles.main}>
      <div className={styles.searchTags}>
        <h4>Search by tags</h4>
        {tagArray.slice(0, 15).map((tag) => {
          return (
            <span>
              <a href="/" key={tag.id}>
                {tag.tag}
              </a>
            </span>
          );
        })}
      </div>

      <div className={styles.bookmarks}>
        <h4>Search by tags</h4>
        {bookmarkArray.slice(0, 5).map((mark) => {
          return (
            <a href="/" key={mark.markedContent}>
              {mark.markedContent}
            </a>
          );
        })}

        <a href="/">Read more</a>
      </div>
    </div>
  );
};

export default SideBar;
