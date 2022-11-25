import { useState, useEffect } from "react";
import { Button, ArticleCard } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [msg, setmsg] = useState([]);
  useEffect(() => {
    fetch("/articles/getarticles.json")
      .then((res) => res.json())
      .then((jres) => setmsg(jres?.msg));
  }, []);

  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="button" />
      {msg.map((item, index) => {
        return <ArticleCard data={item} id={index} />;
      })}
    </main>
  );
};

export default Home;
