import { useFetchData } from "../../Hooks";
import {
  Author,
  Suggestions,
  Share,
  CommentBox,
  Reaction,
  Comment,
} from "../../Components";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const [authorDataResp] = useFetchData("/articles/author.json");
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
      {/* <SuggestedPosts /> */}
      <Suggestions />
      <Share />
      <Reaction />
      <CommentBox />
      <Comment />
    </div>
  );
};

export default ArticlePage;
