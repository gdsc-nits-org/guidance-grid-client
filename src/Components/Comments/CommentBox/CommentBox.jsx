import styles from "./CommentBox.module.scss";

const CommentBox = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.profile} src="https://picsum.photos/200" alt="profile" />
        <p>Guidance Grid</p>
      </div>
      <textarea id="comment" placeholder="What are your thoughts today?" cols={10} rows={8} />
      <div className={styles.bottom}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.comment}>Comment</button>
        </div>
      </div>
  );
};

export default CommentBox;
