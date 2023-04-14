import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import style from "./Error.module.scss";
import error404 from "../../../public/error/error404.json";

const Error = ({ error }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error404,
  };

  return (
    <main className={style.error}>
      <div className={style.lottie}>
        <Lottie options={defaultOptions} />
      </div>
      <h1 className={style.errorMessage}>{error}</h1>
      <div className={style.btn}>
        <Link to="/">
          <button type="button" className={style.homeButton}>
            Take me Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
