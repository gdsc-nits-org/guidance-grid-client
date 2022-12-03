import { Link } from "react-router-dom";
import styles from "./Trending.module.scss";

const Trending = ({ data = {} }) => {
  return (
    <div className={styles.card}>
      <div className={styles.metadata}>
        <div className={styles.rank}>0{data?.rank}</div>
        <Link className={styles.author} to={data?.author?.profile}>
          <img height="20" src={data?.author?.image} alt="Profile of author" />
          <span className={styles.bold}>{data?.author?.name}</span>
        </Link>
        in
        <Link className={styles.author} to={data?.domain?.url}>
          <span className={styles.bold}>{data?.domain?.name}</span>
        </Link>
      </div>
      <div className={styles.heading}>
        <Link to={data?.url}>{data?.title}</Link>
      </div>
      <div className={styles.metadata}>
        <div>{data?.date} •</div>
        <div>10 mins read</div>
      </div>
    </div>
  );
};

export default Trending;
