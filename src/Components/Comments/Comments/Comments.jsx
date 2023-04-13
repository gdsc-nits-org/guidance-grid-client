// import styles from "./Comments.module.css"
import Comment from "./Comment";
import { useFetchData } from "../../../Hooks";

const Comments = () => {
  const [postsRespState] = useFetchData("/articles/comments.json");
  return (
    <>
      {postsRespState.response.map((item, index) => (
        <Comment data={item} id={index} key={item?.id} />
      ))}
    </>
  );
};

export default Comments;
