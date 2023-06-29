import { useState } from "react";
import { Answer, Questions } from "../../Components";
import style from "./QnA.module.scss";

const QnA = () => {
  const [active, setActive] = useState("Recent Questions");
  const [active2, setActive2] = useState("Recent Questions");

  const questions = [
    {
      id: 1,
      author: "Bipangshu Saha",
      datePosted: "January 20 2023",
      question: "What is ReactJS and how can it be used in development?",
      desc: "ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde iste natus e",
      tags: ["React", "CSS", "Android"],
    },
    {
      id: 2,
      author: "Bipangshu Saha",
      datePosted: "January 20 2023",
      question: "What is ReactJS and how can it be used in development?",
      desc: "ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde iste natus e",
      tags: ["React", "CSS", "Android"],
    },
    {
      id: 3,
      author: "Bipangshu Saha",
      datePosted: "January 20 2023",
      question: "What is ReactJS and how can it be used in development?",
      desc: "ed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde iste natus e",
      tags: ["React", "CSS", "Android"],
    },
  ];

  return (
    <div className={style.QnA}>
      <div className={style.questionContainer}>
        <h1 className={style.header}>Posted Questions</h1>
        <ul className={style.tabBar}>
          <button
            className={active === "Recent Questions" ? style.active : ""}
            onClick={() => {
              setActive("Recent Questions");
            }}
            onKeyDown={() => {
              setActive("Recent Questions");
            }}
          >
            Recent Questions
          </button>
          <button
            className={active === "Most Answered" ? style.active : ""}
            onClick={() => {
              setActive("Most Answered");
            }}
            onKeyDown={() => {
              setActive("Most Answered");
            }}
          >
            Most Answered
          </button>
          <button
            className={active === "Most Visited" ? style.active : ""}
            onClick={() => {
              setActive("Most Visited");
            }}
            onKeyDown={() => {
              setActive("Most Visited");
            }}
          >
            Most Visited
          </button>
        </ul>
        <img className={style.design} src="/images/qnaDesign.png" alt="" />
        <div className={style.postQuestion}>
          <button className={style.post}>Post Questions</button>
          <div className={style.stats}>
            <div className={style.statValues}>Questions</div>
            <div className={style.statValues}>Answers</div>
            <div className={style.statValues}>Best Answers</div>
            <div className={style.statValues}>Users</div>
          </div>
        </div>
        <div>
          {questions.map((ques) => {
            return (
              <div>
                <Questions
                  author={ques.author}
                  datePosted={ques.datePosted}
                  question={ques.question}
                  desc={ques.desc}
                  tags={ques.tags}
                  key={ques.id}
                />
                <Answer />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.queriesContainer}>
        <h1 className={style.header}>Posted Queries</h1>
        <ul className={style.tabBar}>
          <button
            className={active2 === "Recent Questions" ? style.active : ""}
            onClick={() => {
              setActive2("Recent Questions");
            }}
            onKeyDown={() => {
              setActive2("Recent Questions");
            }}
          >
            Recent Questions
          </button>
          <button
            className={active2 === "Most Answered" ? style.active : ""}
            onClick={() => {
              setActive2("Most Answered");
            }}
            onKeyDown={() => {
              setActive2("Most Answered");
            }}
          >
            Most Answered
          </button>
          <button
            className={active2 === "Most Visited" ? style.active : ""}
            onClick={() => {
              setActive2("Most Visited");
            }}
            onKeyDown={() => {
              setActive2("Most Visited");
            }}
          >
            Most Visited
          </button>
        </ul>
        <img className={style.design} src="/images/qnaDesign.png" alt="" />
        <div className={style.postQuestion}>
          <button className={style.post}>Post Questions</button>
          <div className={style.stats}>
            <div className={style.statValues}>Questions</div>
            <div className={style.statValues}>Answers</div>
          </div>
        </div>
        <div>
          {questions.map((ques) => {
            return (
              <Questions
                author={ques.author}
                datePosted={ques.datePosted}
                question={ques.question}
                desc={ques.desc}
                tags={ques.tags}
                key={ques.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QnA;
