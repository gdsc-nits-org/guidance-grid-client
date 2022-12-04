import styles from "./SideBar.module.scss";

const SideBar = () => {
  const tags = [
    "node",
    "Vue Js",
    "react Js",
    "placements",
    "django",
    "Java",
    "embedded systems",
    "kotlin",
    "express",
    "SQL",
    "Systenm architect",
    "Data Structures",
    "Ruby",
    "pycharm",
    "typescript",
  ];

  const bookmarkArray = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, expedita!",
    "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "orem ipsum dolor sit amet consectetur.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.searchTags}>
        <h4>Search by tags</h4>
        {tags.slice(0, 15).map((tag) => (
          <span>
            <a href="/">{tag}</a>
          </span>
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
