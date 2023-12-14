import { useState } from "react";
import Share from "../Share/Share";
import { useFetchData } from "../../Hooks";
import styles from "./ArticleSideBar.module.scss";
import SuggestedPosts from "../SuggestedPosts/SuggestedPosts";

const ArticleSideBar = () => {
  const [postsRespState] = useFetchData("/articles/trending.json");
  const [query, setQuery] = useState("");
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          type="search"
          className={styles.search}
        />
        <Share />
        <h4 style={{ fontWeight: 600 }}>Suggested Posts</h4>
      </div>
      {postsRespState.response.map((item, index) => (
        <SuggestedPosts data={item} id={index} key={item?.id} />
      ))}
    </section>
  );
};

export default ArticleSideBar;
