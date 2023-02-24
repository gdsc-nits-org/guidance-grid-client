import { useFetchData } from "../../Hooks";
import Trending from "../Trending/Trending";
// import styles from "./SuggestedPosts.module.scss";

const SuggestedPosts = () => {
  const [postsRespState] = useFetchData("/articles/trending.json");
  return (
    <>
      <h3 style={{ fontWeight: 600 }}>Suggested Posts</h3>
      {postsRespState.response.map((item, index) => (
        <Trending data={item} id={index} key={item?.id} />
      ))}
    </>
  );
};

export default SuggestedPosts;
