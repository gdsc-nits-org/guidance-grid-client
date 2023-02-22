import { useFetchData } from "../../Hooks";
import Trending from "../Trending/Trending";
// import styles from "./SuggestedPosts.module.scss";

const SuggestedPosts = () => {
  const [postsRespState] = useFetchData("/articles/trending.json");
  return (
    <>
      <h1>Suggested Posts</h1>
      {postsRespState.response.map((item, index) => (
        <Trending data={item} id={index} key={item?.id} />
      ))}
    </>
  );
};

export default SuggestedPosts;
