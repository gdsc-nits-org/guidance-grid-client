import styles from "./EditProfileForm.module.scss";

const EditProfile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.editForm}>
        <div className={styles.fields}>
          <form action="">
            <div className={styles.info}>
              <h1>Edit Your Profile</h1>
              <input
                className={styles.fname}
                type="text"
                name="name"
                placeholder="Full name"
                autoComplete="off"
              />
              <input
                type="email"
                name="name"
                placeholder="Facebook Profile Link"
                autoComplete="off"
              />
              <input
                type="text"
                name="name"
                placeholder="Github Profile Link"
                autoComplete="off"
              />
              <input
                type="text"
                name="name"
                placeholder="LinkedIn Profile Link"
                autoComplete="off"
              />
              <textarea rows="4" placeholder="Your Developer bio" />
            </div>

            <button type="submit" href="/">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
