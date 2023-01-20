import styles from "./Bookmark.module.scss";
import { useFetchData } from "../../Hooks";
import { BookmarkCard, Searchbar, TopWriters } from "../../Components";

const Bookmark = () => {
  const [bookmarkDataResp] = useFetchData("/articles/bookmarked.json");
  const [topwritersDataResp] = useFetchData("/articles/topwriters.json");

  return (
    <div className={styles.page}>
      <Searchbar PageTitle="Bookmarks" />
      <div className={styles.main}>
        {bookmarkDataResp.response.map((item, index) => {
          return <BookmarkCard data={item} key={item.id} id={index} />;
        })}
      </div>
      <div className={styles.heading}>Top Writers</div>
      <div className={styles.topauthors}>
        {topwritersDataResp.response.map((item, index) => {
          return <TopWriters data={item} key={item.author.uid} id={index} />;
        })}
      </div>
    </div>
  );
};

export default Bookmark;
