import { useState } from "react";
import styles from "./Profile.module.scss";
import { ArticleCard, Loading } from "../../Components";
import { useFetchData } from "../../Hooks";
// import { Icon } from "@iconify-icon/react";

const ProfilePage = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");
  const [status, isFollow] = useState("Follow");
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
    if (status === "Follow") {
      isFollow("Unfollow");
      setStyle(followed);
    } else {
      isFollow("Follow");
      setStyle(unfollowed);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.cover}>
        <div className={styles.coverPic}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/396/327/725/action-adventure-binary-code-wallpaper-preview.jpg"
            alt="Your Cover Here"
          />
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profilePic}>
            <img
              src="https://cdn-pornstars.4tube.com/0/0/0/0/0/8/9/1/2/1463136980_276x226.jpg"
              alt="Profile"
            />
          </div>

          <div className={styles.profileData}>
            <h2>Sandeep Kherkatary</h2>
            <button style={followStyle} onClick={followBool}>
              {" "}
              {status}
            </button>
            <p>160 followers</p>
            <div className={styles.socials}>
              <span>fb </span>
              <span>insta </span>
              <span>git </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardAndSide}>
        <div className={styles.left}>
          <div className={styles.bio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae,
            quia ullam autem atque maxime porro blanditiis animi, aliquid saepe impedit
            adipisci eaque quaerat temporibus magni perferendis deleniti consequuntur
            fugiat.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
