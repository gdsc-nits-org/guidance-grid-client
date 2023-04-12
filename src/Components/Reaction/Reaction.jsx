import { Icon } from "@iconify-icon/react";
import styles from "./Reaction.module.scss";

const Reaction = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.circle} aria-label="upvote">
        <Icon icon="bx:upvote" height="19" width="19" />
      </button>
      <button className={styles.circle} aria-label="downvote">
        <Icon icon="bx:downvote" height="19" width="19" />
      </button>
      <button aria-label="comment" style={{ margin: "0" }}>
        <Icon icon="material-symbols:comment-outline" height="25" width="25" />
      </button>
    </div>
  );
};

export default Reaction;