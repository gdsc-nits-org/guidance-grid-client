import styles from "./Bookmark.module.scss";
import { useFetchData } from "../../Hooks";
import { BookmarkCard, Footer, Navbar, Searchbar, TopWriters } from "../../Components";

const Bookmark = () => {
  const [bookmarkDataResp] = useFetchData("/articles/bookmarked.json");
  const [topwritersDataResp] = useFetchData("/articles/topwriters.json");

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <Searchbar PageTitle="Bookmarks" />
        <div className={styles.main}>
          {bookmarkDataResp.response.map((item, index) => (
            <BookmarkCard data={item} key={item.id} id={index} />
          ))}
        </div>
        <div className={styles.heading}>Top Writers</div>
        <div className={styles.topauthors}>
          {topwritersDataResp.response.map((item, index) => (
            <TopWriters data={item} key={item.author.uid} id={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookmark;
