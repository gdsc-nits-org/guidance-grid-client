import { useFetchData } from "../../Hooks";
import SuggestedPosts from "./SuggestedPosts";
// import styles from "./Suggestions.module.scss";

const Suggestions = () => {
  const [postsRespState] = useFetchData("/articles/trending.json");
  return (
    <>
      <h4 style={{ fontWeight: 600 }}>Suggested Posts</h4>
      {postsRespState.response.map((item, index) => (
        <SuggestedPosts data={item} id={index} key={item?.id} />
      ))}
    </>
  );
};

export default Suggestions;
