import styles from "./Comment.module.scss";

const Comment = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <img src="https://picsum.photos/200" className={styles.profile} alt="author" />
        <p className={styles.author}>author</p>
        <button type="button" className={styles.reply} aria-label="reply">
          Reply
        </button>
      </div>
      <div className={styles.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi
        repellat dolor beatae magnam cupiditate? Ea fugit dolores aspernatur voluptates
        voluptate non voluptatibus odio ratione! Magni quos voluptates ex harum!
      </div>
    </section>
  );
};

export default Comment;
