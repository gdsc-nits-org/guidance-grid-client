import { useFetchData } from "../../Hooks";
import { Button, ArticleCard, Loading, SideBar } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");

  return (
    <main className={style.home}>
      <h1>Home Page</h1>
      <Button type="button" />
      <div className={style.articlesection}>
        <div className={style.article}>
          {articleRespState.loading && <Loading />}
          {articleRespState.error && <div>Error</div>}
          {articleRespState.response.map((item, index) => {
            return <ArticleCard data={item} id={index} key={item?.id} />;
          })}
        </div>

        <SideBar />
      </div>
    </main>
  );
};

export default Home;
