import React from "react";
import { SignInForm } from "../../Components";
import style from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <>
      <div className={style.SignIn}>
        <SignInForm />
      </div>
      <img className={style.circle} src="/images/circle.svg" alt="" />
      <img className={style.rectangle} src="/images/rectangle.svg" alt="" />
      <img className={style.triangle} src="/images/triangle.svg" alt="" />
      <img className={style.Group60} src="/images/Group60.svg" alt="" />
      <img className={style.Group61} src="/images/Group61.svg" alt="" />
      <img className={style.Group62} src="/images/Group62.svg" alt="" />
      <img className={style.shapes} src="/images/shapes.svg" alt="" />
    </>
  );
};

export default SignIn;
