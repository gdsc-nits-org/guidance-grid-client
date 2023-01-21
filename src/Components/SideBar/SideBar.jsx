import { Link } from "react-router-dom";
import { useFetchData } from "../../Hooks";
import styles from "./SideBar.module.scss";
// mport sidebarData from "./sidebarData.json";

const SideBar = () => {
  const [tagsRespState] = useFetchData("/articles/sidebarData.json");

  return (
    <div className={styles.main}>
      <div className={styles.searchTags}>
        <h4>Search by tags</h4>
        {tagsRespState.loading ||
          tagsRespState.response.tags.slice(0, 15).map((tag, idx) => {
            return (
              <span key={idx}>
                <Link to="/">{tag.tag}</Link>
              </span>
            );
          })}
      </div>

      <div className={styles.bookmarks}>
        <h4>Search by tags</h4>
        {tagsRespState.loading ||
          tagsRespState.response.bookmark.slice(0, 5).map((mark) => {
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
