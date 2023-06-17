import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import styles from "./ProfileEdit.module.scss";
import { useFetchData } from "../../Hooks";

const ProfileEdit = () => {
  const [userRespState] = useFetchData("/articles/userProfile.json");
  const userData = userRespState.response;
  const hiddenProfileInput = useRef(null);
  const hiddenCoverInput = useRef(null);
  const [profilePic, setprofilePic] = useState();
  const [coverPic, setcoverPic] = useState();
  const [user, setUser] = useState({
    name: userData?.name,
    bio: userData?.bio,
  });

  useEffect(() => {
    setUser({
      name: userData?.name,
      bio: userData?.bio,
    });
  }, [userData]);

  const handleName = (e) => {
    setUser({
      name: e.target.value,
    });
  };
  const handleBio = (e) => {
    setUser({
      bio: e.target.value,
    });
  };

  const handleProfilePic = (e) => {
    e.preventDefault();
    setprofilePic(e.target.files[0].name);
  };

  const handleCoverPic = (e) => {
    e.preventDefault();
    setcoverPic(e.target.files[0].name);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    hiddenProfileInput.current.click();
  };
  const handleCoverClick = (e) => {
    e.preventDefault();
    hiddenCoverInput.current.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <div>
          <h1>EDIT PROFILE</h1>
          <h2>Name</h2>
          <input type="text" defaultValue={user.name} onChange={handleName} />
        </div>
        <div>
          <img src="/images/profileEdit.png" alt="profile Edit" />
        </div>
      </div>

      {/* .................. FORM ......................................................................................... */}

      <div className={styles.editForm}>
        <form action="">
          {/* // for profile pricture ................................................................................. */}

          <div className={styles.uploadFile}>
            <h1 className={styles.formHeading}>Change Profile Picture</h1>

            <div className={styles.uploadBox}>
              <button className={styles.uploadButton} onClick={handleProfileClick}>
                {profilePic ? (
                  <p
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {profilePic}
                  </p>
                ) : (
                  <>
                    <Icon
                      className={styles.uploadIcon}
                      icon="ic:round-plus"
                      width="100"
                    />
                    <p onChange={handleProfilePic}>Choose File</p>
                  </>
                )}
              </button>

              <input
                type="file"
                onChange={handleProfilePic}
                ref={hiddenProfileInput}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>

          {/* // for Cover pricture.............................................................................. ....... */}

          <div className={styles.uploadFile}>
            <h1 className={styles.formHeading}>Change Cover Picture</h1>

            <div className={styles.uploadBox}>
              <button className={styles.uploadButton} onClick={handleCoverClick}>
                {coverPic ? (
                  <p
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {coverPic}
                  </p>
                ) : (
                  <>
                    <Icon
                      className={styles.uploadIcon}
                      icon="ic:round-plus"
                      width="100"
                    />
                    <p onChange={handleCoverPic}>Choose File</p>
                  </>
                )}
              </button>

              <input
                type="file"
                onChange={handleCoverPic}
                ref={hiddenCoverInput}
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
          </div>

          {/* BIO.......................... */}
          <div className={styles.bio}>
            <h1 className={styles.formHeading}>Bio</h1>
            <textarea
              className={styles.bioArea}
              defaultValue={user.bio}
              onChange={handleBio}
              name="bio"
              id="bio"
            ></textarea>
          </div>

          <div className={styles.exp}>
            <h1 className={styles.formHeading}> Add New Experience</h1>

            <input type="text" name="" id="" placeholder="eg: Intern @ GDSC" />
            <div className={styles.years}>
              <input type="text" placeholder="from (month)" />
              <input type="text" placeholder="from (year)" />
              <input type="text" placeholder="till (month)" />
              <input type="text" placeholder="till (year)" />
            </div>
          </div>

          {/* Links........................... */}

          <div className={styles.links}>
            <h1 className={styles.formHeading}>Facebook Link</h1>
            <input type="text" />

            <h1 className={styles.formHeading}>GithubLink</h1>
            <input type="text" />

            <h1 className={styles.formHeading}>Linkedin Link</h1>
            <input type="text" />
          </div>

          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
