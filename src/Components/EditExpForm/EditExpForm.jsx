import styles from "./EditExpForm.module.scss";
import ExpComp from "../ExprienceBox/Exp";
const EditExperience = () => {
  return (
    <div className={styles.addExpForm}>
      <h1>Add Experience</h1>

      <div className={styles.formGrid}>
        {/* .................. Left Gird............................... */}
        <div className={styles.leftGrid}>
          <form action="">
            <div>
              <h3>Designation</h3>
              <input type="text" placeholder="Organization" autoComplete="off" />
              <input type="text" name="name" placeholder="Position" autoComplete="off" />
            </div>
            <div>
              <h3>From</h3>
              <input
                className={styles.fname}
                type="text"
                name="name"
                placeholder="Month"
                autoComplete="off"
              />
              <input type="text" name="name" placeholder="Year" autoComplete="off" />
            </div>

            <div>
              <h3>Till</h3>
              <input
                className={styles.fname}
                type="text"
                name="name"
                placeholder="Month"
                autoComplete="off"
              />
              <input type="text" name="name" placeholder="Year" autoComplete="off" />
            </div>
            <button className={styles.expSubmit} type="submit">
              ADD
            </button>
          </form>
        </div>

        {/* .................. Right Gird............................... */}
        <div className={styles.rightGrid}>
          <h2>EXPERIENCE</h2>

          <div>
            <ExpComp
              head="NIT SILCHAR"
              desig="UI/UX Member"
              jMon="August"
              jYear="2022"
              EMon="Present"
              EYear="2023"
            />
          </div>

          <div>
            <ExpComp
              head="NEHU"
              desig="ARCHITECTURE"
              jMon="Monday"
              jYear="2021"
              EMon="JAnuary"
              EYear="2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
