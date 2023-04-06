import React from "react";
import styles from "./About.module.scss";
import { useFetchData } from "../../Hooks";
import TeamCard from "../../Components/TeamCard/TeamCard";

const About = () => {
  const [teamData] = useFetchData("/teamData/teamData.json");
  return (
    <div className={styles.page}>
      <div className={styles.heading}>About Guidance Grid</div>
      <div className={styles.about}>
        <p className={styles.text}>
          Guidance Grid will help you to seek assistance from your favourite person
          regarding any matter. People will share their experiences as an Article or QnA
          section.
        </p>
      </div>

      <div className={styles.heading}>Meet the team</div>
      <div className={styles.teamContainer}>
        <div className={styles.heading}>Project lead</div>
        <div className={styles.senior}>
          {teamData.response.map((item, index) =>
            item.designation === "Project lead" ? (
              <div>
                <TeamCard data={item} id={index} key={item.id} />
              </div>
            ) : null
          )}
        </div>

        <div className={styles.heading}>Web member</div>
        <div className={styles.junior}>
          {teamData.response.map((item, index) =>
            item.designation === "Web member" ? (
              <div>
                <TeamCard data={item} id={index} key={item.id} />
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className={styles.junior}>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default About;
