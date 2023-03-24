/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./Profile.module.scss";
import { ArticleCard, Loading, ExpComp } from "../../Components";
import { useFetchData } from "../../Hooks";
const ProfilePage = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");
  const [userRespState] = useFetchData("/articles/userProfile.json");
  const userData = userRespState.response;

  const [status, isFollow] = useState("FOLLOW");
  const [followStyle, setStyle] = useState();

  const followed = {
    color: "white",
    backgroundColor: "#008DE9",
  };
  const unfollowed = {
    color: "#008DE9",
    backgroundColor: "white",
  };
  const followBool = () => {
    if (status === "FOLLOW") {
      isFollow("UNFOLLOW");
      setStyle(followed);
    } else {
      isFollow("FOLLOW");
      setStyle(unfollowed);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.cover}>
        <div className={styles.coverPic}>
          <img src={userData.cover} alt="Your Cover Here" />
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profilePic}>
            <img src={userData.display} alt="Profile" />
          </div>

          <div className={styles.profileData}>
            <h2>{userData.name}</h2>
            <button style={followStyle} onClick={followBool}>
              {status}
            </button>
            <p>{userData.followers} followers</p>
            <div className={styles.socials}>
              <p>
                {" "}
                <a href={userData.fb}>
                  <Icon icon="ri:facebook-fill" width="20" />
                </a>{" "}
              </p>
              <p>
                {" "}
                <a href={userData.github}>
                  <Icon icon="mdi:github" width="25" />
                </a>{" "}
              </p>
              <p>
                {" "}
                <a href={userData.linkedin}>
                  <Icon icon="mdi:linkedin" width="25" />
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardAndSide}>
        <div className={styles.left}>
          <div className={styles.bio}>
            (developer) has an excellent OOP, C# Language and the .NET framework
            knowledge. Also JavaScript Language, HTML and CSS languages and great
            understanding of HTTP and web applications lifecycle specifically single page
            applications. Great experience with source control systems (Git), experience
            with issue tracking systems: JIRA. Understanding unit testing concepts and
            understanding of behavior driven tests and of continuous integration and
            deployment processes.
          </div>

          {/* ........experience tab for phone size...... */}

          <div className={styles.exprMobile}>
            <h2>Experience</h2>
            <ExpComp
              head="NIT SILCHAR"
              desig="UI/UX Member"
              jMon="August"
              jYear="2022"
              EMon="Present"
              EYear="2023"
            />
            <ExpComp
              head="NEHU"
              desig="ARCHITECTURE"
              jMon="Monday"
              jYear="2021"
              EMon="JAnuary"
              EYear="2022"
            />
            <ExpComp
              head="Assam University"
              desig="KERANI"
              jMon="December"
              jYear="2022"
              EMon="June"
              EYear="2023"
            />
          </div>

          <h1 className={styles.recentHead}>Recent posts</h1>

          <div className={styles.article}>
            {articleRespState.loading && <Loading />}
            {articleRespState.error && <div>Error</div>}
            {articleRespState.response.map((item, index) => (
              <ArticleCard data={item} id={index} key={item?.id} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.expr}>
            <h2>Experience</h2>
            <ExpComp
              head="NIT SILCHAR"
              desig="UI/UX Member"
              jMon="August"
              jYear="2022"
              EMon="Present"
              EYear="2023"
            />
            <ExpComp
              head="NEHU"
              desig="ARCHITECTURE"
              jMon="Monday"
              jYear="2021"
              EMon="JAnuary"
              EYear="2022"
            />
            <ExpComp
              head="Assam University"
              desig="KERANI"
              jMon="December"
              jYear="2022"
              EMon="June"
              EYear="2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
