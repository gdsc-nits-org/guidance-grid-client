import { Icon } from "@iconify-icon/react";
import style from "./Answer.module.scss";

const Answer = () => {
  return (
    <div className={style.answerBox}>
      <div className={style.left}>
        <div className={style.answers}>
          <Icon icon="material-symbols:comment" width="20" height="20" hFlip />
          <p>5 answers</p>
        </div>
        <div className={style.views}>
          <Icon icon="mdi:eye" width="20" height="20" />
          <p>345 views</p>
        </div>
      </div>
      <div className={style.right}>
        <button className={style.giveAnswer}>Answer</button>
      </div>
    </div>
  );
};

export default Answer;
