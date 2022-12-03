import styles from "./SideBar.module.scss";

const SideBar = () => {
  const tags = [
    "Kotlin",
    "Data Structures",
    "Vue Js",
    "Android",
    "Embedded Structures",
    "ReactJs",
    "Node",
    "Placements",
    "Kotlin",
    "Embedded Structures",
    "react",
    "vueJs",
    "pnpm",
    "react",
    "vueJs",
  ];

  const bookmarkArray = [
    "What is ReactJS and how can it be used development",
    "13 reasons Why no one loves npm anymore",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Why should you not use ReactJS and move your project to Angular as soon as possible",
    "Lorem ipsum dolor sit amet consectetur, adipisicing ",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "What is ReactJS and how can it be used development",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.searchTags}>
        <h4>Search by tags</h4>
        {tags.slice(0, 15).map((tag) => (
          <span>{tag}</span>
        ))}
      </div>

      <div className={styles.bookmarks}>
        <h4>Bookmarks</h4>
        {bookmarkArray.slice(0, 5).map((mark) => (
          <a href="/">{mark}</a>
        ))}
        <a href="/">Read more</a>
      </div>
    </div>
  );
};

export default SideBar;
