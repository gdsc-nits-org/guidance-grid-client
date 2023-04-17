import { useFetchData } from "../../Hooks";
import {
  Author,
  Suggestions,
  Share,
  CommentBox,
  Reaction,
  Comments,
  ArticleBody,
} from "../../Components";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const [authorDataResp] = useFetchData("/articles/author.json");
  const [articleDataResp] = useFetchData("/articles/article.json");

  return (
    <div className={styles.page}>
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
          <div className={styles.reactions}>
            <Reaction data={item.metadata} key={item.title} />
          </div>
          <ArticleBody data={item} key={item.id} />
        </>
      ))}
      <Suggestions />
      <Share />
      <CommentBox />
      <Comments />
    </div>
  );
};

export default ArticlePage;
