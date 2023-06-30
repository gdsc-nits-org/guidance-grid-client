import { Icon } from "@iconify-icon/react";
import style from "./Answer.module.scss";

const Answer = ({ answers, views, likes }) => {
  return (
    <div className={style.answerBox}>
      <div className={style.left}>
        <div className={style.likes}>
          <Icon icon="teenyicons:up-solid" width="10" height="10" />
          <p>{likes}</p>
          <Icon icon="teenyicons:down-solid" width="10" height="10" />
        </div>
        <div className={style.answers}>
          <Icon
            className={style.iconify}
            icon="material-symbols:comment"
            width="10"
            height="10"
            hFlip
          />
          <p>{answers} answers</p>
        </div>
        <div className={style.views}>
          <Icon className={style.iconify} icon="mdi:eye" width="10" height="10" />
          <p>{views} views</p>
        </div>
      </div>
      <div className={style.right}>
        <button className={style.giveAnswer}>Answer</button>
      </div>
    </div>
  );
};

export default Answer;
