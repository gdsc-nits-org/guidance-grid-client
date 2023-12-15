// import Trending from "../Trending/Trending";
import { Link } from "react-router-dom";
import styles from "./SuggestedPosts.module.scss";

const SuggestedPosts = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <div className={styles.first}>
          <Link to={data?.author?.profile}>
            <img className={styles.profile} src={data?.author?.image} alt="author pic" />
          </Link>
          <Link to={data?.author?.profile}>
            <b>{data?.author?.name}</b>
          </Link>
          {"  in "}
          <Link to={data?.domain?.url}>
            <b>{data?.domain?.name}</b>
          </Link>
        </div>
        <div className={styles.title}>
          <Link to={data?.url}>
            <b>{data?.title}</b>
          </Link>
        </div>
      </div>
      <div className={styles.pic}>
        <img
          className={styles.cover}
          src="https://picsum.photos/seed/picsum/400"
          alt="description"
        />
      </div>
    </div>
  );
};

export default SuggestedPosts;
