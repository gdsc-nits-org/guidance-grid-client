import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <>
      <div className={styles.head}>
        <h1>Guidance Grid</h1>
      </div>
      <div className={styles.searchbar}>
        <input type={styles.text} placeholder="Search blogs" />
      </div>
    </>
  );
};

export default Searchbar;
