import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss";
import { ArticleCard, Loading, ExpComp } from "../../Components";
import { useFetchData } from "../../Hooks";
const ProfilePage = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");
  const [userRespState] = useFetchData("/articles/userProfile.json");
  const userData = userRespState.response;
  const [follow, isFollow] = useState(userData.fol);

  useEffect(() => {
    isFollow(userData?.fol);
  }, [userData]);

  const handleFollow = () => {
    isFollow((prevState) => !prevState);
  };

  return (
    <div className={styles.main}>
      {/* .............. cover section........................................... */}
      <div className={styles.cover}>
        <div className={styles.editProfile}>
          <Link to="/user/profileedit">
            <Icon
              icon="material-symbols:settings"
              className={styles.editProfileIcon}
              width="20"
            />
          </Link>
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
            <button
              className={follow ? styles.follow : styles.unfollow}
              onClick={handleFollow}
            >
              {follow ? "Followed" : "Follow"}
            </button>
            <p>{userData.followers} followers</p>

            {/* .............. Socilas......................................... */}
            <div className={styles.socials}>
              <p>
                {" "}
                <a href={`${userData.fb}`}>
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
            <h2>Experience</h2>
            {userData?.exp?.map((it) => (
              <ExpComp
                key={it.id}
                head={it.location}
                desig={it.desig}
                jMon={it.joinMon}
                jYear={it.joinYear}
                EMon={it.endMon}
                EYear={it.endYear}
              />
            ))}
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

            <h2>Experience</h2>

            {userData?.exp?.map((it) => (
              <ExpComp
                key={it.id}
                head={it.location}
                desig={it.desig}
                jMon={it.joinMon}
                jYear={it.joinYear}
                EMon={it.endMon}
                EYear={it.endYear}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
