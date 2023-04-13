import { Link } from "react-router-dom";
import styles from "./Comment.module.scss";

const Comment = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <img src={data?.photo} className={styles.profile} alt="author" />
        <p className={styles.author}>
          <Link to={data?.profile}>{data?.name}</Link>
        </p>
        <button type="button" className={styles.reply} aria-label="reply">
          Reply
        </button>
      </div>
      <div className={styles.content}>{data?.content}</div>
    </section>
  );
};

export default Comment;
