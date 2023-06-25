import { useFetchData } from "../../Hooks";
import {
  Author,
  CommentBox,
  Reaction,
  Comments,
  ArticleBody,
  ArticleSideBar,
} from "../../Components";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const [authorDataResp] = useFetchData("/articles/author.json");
  const [articleDataResp] = useFetchData("/articles/article.json");

  return (
    <div className={styles.page}>
      <ArticleSideBar />
      {authorDataResp.response.map((d, index) => (
        <Author
          key={index}
          name={d.name}
          photo={d.photo}
          profile={d.profile}
          upvotes={d.upvotes}
          views={d.views}
          facebook={d.facebook}
          linkedin={d.facebook}
          twitter={d.twitter}
        />
      ))}
      {articleDataResp.response.map((item) => (
        <>
          <ArticleBody data={item} key={item.id} />
          <div className={styles.reactions}>
            <Reaction data={item.metadata} key={item.title} />
          </div>
        </>
      ))}
      <CommentBox />
      <Comments />
    </div>
  );
};

export default ArticlePage;
