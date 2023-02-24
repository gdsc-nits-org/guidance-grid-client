import { useFetchData } from "../../Hooks";
import { Author, Share } from "../../Components";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const [authorDataResp] = useFetchData("/articles/author.json");
  return (
    <div className={styles.page}>
      {/* <SuggestedPosts /> */}
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
      <Share />
    </div>
  );
};

export default ArticlePage;
