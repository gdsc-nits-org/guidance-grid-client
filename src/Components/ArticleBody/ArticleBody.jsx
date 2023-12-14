import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styles from "./ArticleBody.module.scss";

const ArticleBody = ({ data }) => {
  const text = data?.content;
  return (
    <main className={styles.container}>
      <header className={styles.title}>{data?.title}</header>
      <div className={styles.author}>
        <Link to={data?.author.url} style={{ fontWeight: 600 }}>
          {data?.author.name}
        </Link>{" "}
        in{" "}
        <Link to={data?.domain.url} style={{ fontWeight: 600 }}>
          {data?.domain.name}
        </Link>
      </div>
      <figure className={styles.img}>
        <img src={data?.image} alt="article cover" />
      </figure>
      <article>
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </main>
  );
};

export default ArticleBody;
