// import styles from "./Comments.module.css"
import Comment from "./Comment";
import { useFetchData } from "../../../Hooks";

const Comments = () => {
  const [postsRespState] = useFetchData("/articles/comments.json");
  return (
    <>
      {postsRespState.response.map((item) => (
        <Comment data={item} key={item?.id} />
      ))}
    </>
  );
};

export default Comments;
