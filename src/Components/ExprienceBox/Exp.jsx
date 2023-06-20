import styles from "./Exp.module.scss";

const ExpComp = (data) => {
  return (
    <div className={styles.main}>
      <span className={styles.head}>{data.head}</span> |{" "}
      <span className={styles.desig}>{data.desig}</span>
      <p>
        <span>{data.jMon}</span> <span>{data.jYear}</span> - <span></span>
        {data.EMon}
        <span>{data.EYear}</span>
      </p>
    </div>
  );
};

export default ExpComp;
