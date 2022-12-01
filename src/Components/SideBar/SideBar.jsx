import styles from "./SideBar.module.scss";

const SideBar = () => {
  const tags = [
    "Kotlin",
    "Vue Js",
    "Android",
    "ReactJs",
    "Node",
    "Placements",
    "Embedded Structures",
    "Data Structures",
    "react",
    "vueJs",
    "Kotlin",
    "pnpm",
    "Vite",
    "scss",
  ];

  const tagspan = tags.map((tag) => <span>{tag}</span>);

  return (
    <div className={styles.main}>
      <div className={styles.tagBox}>
        <h4>Search by tags</h4>
        {tagspan}
      </div>

      <div className={styles.bookmarks}>
        <h4>Bookmarks</h4>
        <p>What is ReactJS and how can it be used development</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <p>What is ReactJS and how can it be used development</p>
        <p>13 reasons Why no one loves npm anymore</p>
        <p>
          <a href="/">Read more</a>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
