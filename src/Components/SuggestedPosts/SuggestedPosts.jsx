// import Trending from "../Trending/Trending";
import { Link } from "react-router-dom";
import styles from "./SuggestedPosts.module.scss";

const SuggestedPosts = ({ data }) => {
  return (
    <div className={styles.card}>
      <Link to={data?.author?.profile}>
        {/* <img className={styles.profile} src="https://picsum.photos/200" alt="author pic" /> */}
        <img className={styles.profile} src={data?.author?.image} alt="author pic" />
      </Link>
      <div className={styles.details}>
        <Link to={data?.author?.profile}>
          <b>{data?.author?.name}</b>
        </Link>
        {"  in "}
        <Link to={data?.domain?.url}>
          <b>{data?.domain?.name}</b>
        </Link>
        {/* <b>Author</b> in <b>Projects</b> */}
      </div>
      <img
        className={styles.cover}
        src="https://picsum.photos/seed/picsum/400"
        alt="description"
      />
      {/* <div className={styles.title}>Lorem ipsum dolor sit amet consectetur.</div> */}
      <div className={styles.title}>
        <Link to={data?.url}>{data?.title}</Link>
      </div>
    </div>
  );
};

export default SuggestedPosts;
