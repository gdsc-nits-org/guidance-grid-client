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
      <div className={styles.article_body}>
        {authorDataResp.response.map((d) => (
          <Author
            key={d.id}
            name={d.name}
            photo={d.photo}
            profile={d.profile}
            upvotes={d.upvotes}
            views={d.views}
            facebook={d.facebook}
            linkedin={d.linkedin}
            twitter={d.twitter}
          />
        ))}
        {articleDataResp.response.map((item) => (
          <>
            <ArticleBody data={item} key={item.id} />
            <div className={styles.reactions}>
              <Reaction data={item.metadata} key={item.metadata.views} />
            </div>
          </>
        ))}
        <CommentBox />
        <Comments />
      </div>
      <div className={styles.sidebar}>
        <ArticleSideBar />
      </div>
    </div>
  );
};

export default ArticlePage;
