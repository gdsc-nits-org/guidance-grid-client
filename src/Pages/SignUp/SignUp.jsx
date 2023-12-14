import React from "react";
import style from "./SignUp.module.scss";
import { SignUpForm } from "../../Components";

const SignUp = () => {
  return (
    <>
      <div className={style.SignUp}>
        <SignUpForm />
      </div>
      <img className={style.circle} src="/images/circle.svg" alt="" />
      <img className={style.rectangle} src="/images/rectangle.svg" alt="" />
      <img className={style.triangle} src="/images/triangle.svg" alt="" />
      <img className={style.Group60} src="/images/Group60.svg" alt="" />
      <img className={style.Group58} src="/images/Group58.svg" alt="" />
      <img className={style.Group62} src="/images/Group62.svg" alt="" />
      <img className={style.shapes} src="/images/shapes.svg" alt="" />
    </>
  );
};

export default SignUp;
