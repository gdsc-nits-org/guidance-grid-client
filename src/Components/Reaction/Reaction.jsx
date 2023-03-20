import { Icon } from "@iconify-icon/react";
import styles from "./Reaction.module.scss";

const Reaction = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.circle} aria-label="upvote">
        <Icon icon="bx:upvote" height="20" width="20" />
      </button>
      <button className={styles.circle} aria-label="downvote">
        <Icon icon="bx:downvote" height="20" width="20" />
      </button>
      <button aria-label="comment" style={{ margin: "0" }}>
        <Icon icon="material-symbols:comment-outline" height="30" width="27" />
      </button>
    </div>
  );
};

export default Reaction;
