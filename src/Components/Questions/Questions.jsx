import { Icon } from "@iconify-icon/react";
import style from "./Questions.module.scss";

const Questions = ({ author, datePosted, question, desc, tags, likes }) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.profile}>
          <Icon icon="healthicons:ui-user-profile" width="37" height="37" />
        </div>
        <div className={style.likes}>
          <Icon icon="teenyicons:up-solid" width="15" height="15" />
          {likes}
          <Icon icon="teenyicons:down-solid" width="15" height="15" />
        </div>
      </div>
      <div className={style.questionBox}>
        <div className={style.header}>
          <div className={style.author}>{author}</div>
          <div className={style.date}>Asked {datePosted}</div>
        </div>
        <div className={style.question}>
          <h2>{question}</h2>
          <p>{desc}</p>
          <ul className={style.tags}>
            {tags.map((tag) => {
              return <li key={tag}>{tag}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Questions;
