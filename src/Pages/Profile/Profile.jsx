/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./Profile.module.scss";
import {
  ArticleCard,
  Loading,
  ExpComp,
  EditProfile,
  EditExperience,
} from "../../Components";
import { useFetchData } from "../../Hooks";
const ProfilePage = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");
  const [userRespState] = useFetchData("/articles/userProfile.json");
  const userData = userRespState.response;
  const [Follow, isFollow] = useState(0);
  const [status, changeStatus] = useState("Follow");

  const follow = () => {
    if (Follow === 0) {
      isFollow(1);
      changeStatus("Followed");
    } else {
      isFollow(0);
      changeStatus("Follow");
    }
  };

  return (
    <div className={styles.main}>
      {/* .............. cover section........................................... */}
      <div className={styles.cover}>
        <div className={styles.editProfile}>
          <Icon icon="material-symbols:settings" color="white" width="20" />
        </div>
        <div className={styles.coverPic}>
          <img src={userData.cover} alt="Your Cover Here" />
        </div>

        {/* .............. Profile Info............................................ */}

        <div className={styles.profileInfo}>
          <div className={styles.profilePic}>
            <img src={userData.display} alt="Profile" />
          </div>

          <div className={styles.profileData}>
            <h2>{userData.name}</h2>
            <button id={Follow === 0 ? styles.follow : styles.unfollow} onClick={follow}>
              {status}
            </button>
            <p>{userData.followers} followers</p>

            {/* .............. Socilas......................................... */}
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
          <div className={styles.bio}>{userData.bio}</div>

          {/* ........experience tab for phone size.............................. */}

          <div className={styles.exprMobile}>
            <h2>
              Experience
              <span id={styles.expIconColor}>
                <Icon
                  icon="material-symbols:add-circle-outline"
                  color="black"
                  width="15"
                />
              </span>
            </h2>
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

          {/* ........Recent Posts............................................. */}
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
            {/* ........experience tab for Desktop................................. */}

            <h2>
              Experience
              <span id={styles.expIconColor}>
                <Icon
                  icon="material-symbols:add-circle-outline"
                  color="black"
                  width="15"
                />
              </span>
            </h2>

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

      {/* ....................... EDIT FORMS .................................................... */}

      <EditProfile />
      <EditExperience />
    </div>
  );
};

export default ProfilePage;
