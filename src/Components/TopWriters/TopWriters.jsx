import { Link } from "react-router-dom";
import styles from "./TopWriters.module.scss";

const TopWriters = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.profiles}>
        <Link to={data?.author?.profile}>
          <div>
            <img alt="profile" src={data.author.image} />
            <div className={styles.authorname}> {data?.author?.name}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopWriters;
