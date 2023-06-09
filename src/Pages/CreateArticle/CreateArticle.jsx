import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import style from "./CreateArticle.module.scss";

const CreateArticle = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <section className={style.createArticle}>
      <div className={style.leftSec}>
        <h1 className={style.secHead}>Add New Article</h1>
        <div className={style.title}>
          <h1 className={style.titleHead}>Title</h1>
          <p>Be specific with your title</p>
          <input type={style.text} placeholder="Enter your title" />
        </div>
        <div className={style.content}>
          <h1 className={style.contentHead}>Content</h1>
          <p>Write about your topic</p>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={-0.5} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
        <div className={style.ref}>
          <h1 className={style.refHead}>Other website in reference.</h1>
          <p>Reference on the topic.</p>
          <input type={style.text} placeholder="Enter tags" />
        </div>
        <div className={style.tags}>
          <h1 className={style.tagHead}>Tags</h1>
          <p>Add upto 5 tags to describe your article</p>
          <p className={style.tag_instruction}>
            (Place a comma between each tag that you add to the post.)
          </p>
          <input type={style.text} placeholder="Enter tags" />
        </div>
        <div className={style.submit}>
          <button className={style.btn}>POST ARTICLE</button>
        </div>
      </div>
      <div className={style.rightSec}>
        <div className={style.rightImg}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1677011852/Guidance%20Grid/Blogging-pana_1_ihgns9.png"
            alt=""
          />
        </div>
        <div className={style.instructions}>
          <h2 className={style.instHead}>How to write articles?</h2>
          <ol>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
            <li>What is ReactJS and how can it be used in development?</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CreateArticle;
