import SideBar from "../SideBar/SideBar";
// import Suggestions from "../SuggestedPosts/Suggestions";
import Share from "../Share/Share";
import { useFetchData } from "../../Hooks";
import styles from "./ArticleSideBar.module.scss";
import SuggestedPosts from "../SuggestedPosts/SuggestedPosts";

const ArticleSideBar = () => {
  const [postsRespState] = useFetchData("/articles/trending.json");
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1rem auto",
        }}
      >
        <input placeholder="Search" className={styles.search} />
        <Share />
        <h4 style={{ fontWeight: 600 }}>Suggested Posts</h4>
        {postsRespState.response.map((item, index) => (
          <SuggestedPosts data={item} id={index} key={item?.id} />
        ))}
        {/* <Suggestions /> */}
      </div>
      <SideBar />
    </section>
  );
};

export default ArticleSideBar;
