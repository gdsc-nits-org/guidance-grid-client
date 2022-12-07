import { useFetchData } from "../../Hooks";
import { ArticleCard, Loading, SideBar } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  const [articleRespState] = useFetchData("/articles/getarticles.json");

  return (
    <main className={style.home}>
      <div className={style.articlesection}>
        <div className={style.article}>
          {articleRespState.loading && <Loading />}
          {articleRespState.error && <div>Error</div>}
          {articleRespState.response.map((item, index) => (
            <ArticleCard data={item} id={index} key={item?.id} />
          ))}
        </div>

        <SideBar />
      </div>
    </main>
  );
};

export default Home;
