import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import styles from "./Author.module.scss";

const Author = ({
  name,
  photo,
  profile,
  upvotes,
  views,
  facebook,
  linkedin,
  twitter,
}) => {
  return (
    <div className={styles.container}>
      <Link to={profile}>
        <img src={photo} alt="author pic" />
        <div className={styles.name}>{name}</div>
      </Link>
      <div className={styles.tag}>
        {views} views {upvotes} upvotes
      </div>
      <div className={styles.icons}>
        <a href={facebook} target="_blank">
          <Icon icon="ic:round-facebook" color="black" width="24" height="24" />
        </a>
        <a href={linkedin} target="_blank">
          <Icon
            icon="entypo-social:linkedin-with-circle"
            color="black"
            width="24"
            height="24"
          />
        </a>
        <a href={twitter} target="_blank">
          <Icon
            icon="ant-design:twitter-circle-filled"
            color="black"
            width="24"
            height="24"
          />
        </a>
      </div>
    </div>
  );
};

export default Author;
