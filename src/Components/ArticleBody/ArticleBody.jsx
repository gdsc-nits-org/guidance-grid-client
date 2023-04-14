import "./ArticleBody.module.scss";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ArticleBody = ({ data }) => {
  const text = data?.content;
  return (
    <main>
      <header>{data?.title}</header>
      <section>
        <Link to={data?.author.url} style={{ fontWeight: 600 }}>
          {data?.author.name}
        </Link>{" "}
        in{" "}
        <Link to={data?.domain.url} style={{ fontWeight: 600 }}>
          {data?.domain.name}
        </Link>
      </section>
      <figure>
        <img src={data?.image} alt="article cover" />
      </figure>
      <article>
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </main>
  );
};

export default ArticleBody;
