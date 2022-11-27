import { useState, useEffect } from "react";
import { Button, ArticleCard, Loading } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [respState, setRespState] = useState({
    loading: true,
    response: [],
    error: false,
  });

  const fetchData = async () => {
    try {
      const res = await fetch("/articles/getarticles.json");
      const jres = await res.json();
      setRespState({
        loading: false,
        response: jres.status === 200 ? jres.msg : [],
        error: jres.status !== 200 ? jres.msg : null,
      });
    } catch (e) {
      setRespState((prevState) => {
        return {
          ...prevState,
          loading: false,
          error: e,
        };
      });
    }
  };

  useEffect(() => {
    // fetchData();
    /* Set Timeout used to simulate loading. Will be removed */
    setTimeout(fetchData, 1000);
  }, []);

  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="button" />
      {respState.loading && <Loading />}
      {respState.error && <div>Error</div>}
      {respState.response.map((item, index) => {
        return <ArticleCard data={item} id={index} />;
      })}
    </main>
  );
};

export default Home;
