import React from "react";
import styles from "./About.module.scss";
import { useFetchData } from "../../Hooks";
import TeamCard from "../../Components/TeamCard/TeamCard";

const About = () => {
  const [teamData] = useFetchData("/teamData/teamData.json");
  return (
    <div className={styles.page}>
      <div className={styles.aboutSection}>
        <div className={styles.heading}>About Guidance Grid</div>
        <div className={styles.about}>
          <p className={styles.text}>
            Guidance Grid will help you to seek assistance from your favourite person
            regarding any matter. People will share their experiences as an Article or QnA
            section.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className={styles.teamContainer}>
        <div className={styles.heading}>Meet the team</div>
        <div className={styles.senior}>
          {teamData.response.map((item, index) =>
            item.designation === "Project Mentor" ? (
              <div>
                <TeamCard data={item} id={index} key={item.id} />
              </div>
            ) : null
          )}
        </div>

        {/* <div className={styles.heading}>Web member</div> */}
        <div className={styles.junior}>
          {teamData.response.map((item, index) =>
            item.designation !== "Project Mentor" ? (
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
