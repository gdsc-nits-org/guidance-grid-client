import style from "./CreateArticle.module.scss";

const CreateArticle = () => {
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
          <textarea name="" id="" cols="125" rows="15"></textarea>
        </div>
        <div className={style.tags}>
          <h1 className={style.tagHead}>Tags</h1>
          <p>Add upto 5 tags to describe your article</p>
          <input type={style.text} placeholder="Enter tags" />
        </div>
        <div className={style.submit}>
            <button className={style.btn}>POST ARTICLE</button>
        </div>
      </div>
      <div className={style.rightSec}>
        <img src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1677011852/Guidance%20Grid/Blogging-pana_1_ihgns9.png" alt="" />
      </div>
    </section>
  );
};

export default CreateArticle;
