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
    <div className={styles.mainBox}>
      <div className={styles.box1}>
        <h4>Search by tags</h4>
        {tagspan}
      </div>

      <div className={styles.box2}>
        <h4>Bookmarks</h4>
        <p>What is ReactJS and how can it be used int development</p>
        <p>What is ReactJS and how canbe used innot development</p>
        <p>
          What is ReactJS and h lklngo;jhea ohgp q qr goiqhgr qihghoq g oqogiq gow can it
          be usjnojnonononed int development
        </p>
        <p>What is ReactJS and how ca n it be used int development</p>
        <p>
          <a href="/">Read more</a>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
