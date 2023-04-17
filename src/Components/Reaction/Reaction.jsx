import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./Reaction.module.scss";

const Reaction = ({ data }) => {
  const views = data?.views;
  const [upvotes, setUpvotes] = useState(data.upvotes);
  return (
    <>
      <div className={styles.info}>
        <div>{views} views</div>
        <div>{upvotes} upvotes</div>
      </div>
      <div className={styles.wrapper}>
        <button
          aria-label="upvote"
          onClick={() => {
            setUpvotes(upvotes + 1);
          }}
        >
          <Icon icon="bx:upvote" height="19" width="19" />
        </button>
        <button
          aria-label="downvote"
          onClick={() => {
            setUpvotes(upvotes - 1);
          }}
        >
          <Icon icon="bx:downvote" height="19" width="19" />
        </button>
        <button aria-label="comment">
          <Icon icon="material-symbols:comment-outline" height="25" width="25" />
        </button>
      </div>
    </>
  );
};

export default Reaction;
