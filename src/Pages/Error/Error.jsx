import style from "./Error.module.scss";

const Error = ({ error }) => {
  return (
    <main className={style.error}>
      <h1>{error}</h1>
    </main>
  );
};

export default Error;
