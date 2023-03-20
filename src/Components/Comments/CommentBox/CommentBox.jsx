import { Icon } from "@iconify-icon/react";
import styles from "./CommentBox.module.scss";

const CommentBox = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.profile} src="https://picsum.photos/200" alt="profile" />
        <p>Guidance Grid</p>
      </div>
      <input type="text" placeholder="What are your thoughts today?"></input>
      <div className={styles.bottom}>
        <div className={styles.format}>
          <Icon icon="material-symbols:format-bold" height="30" />
          <Icon icon="ph:text-italic-thin" height="30" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.comment}>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
// KKMJjHk6pz99uQG
