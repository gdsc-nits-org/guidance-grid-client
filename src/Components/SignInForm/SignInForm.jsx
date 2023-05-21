import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SignInForm.module.scss";

const SignInForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>Log In</div>
      <form className={style.SignupForm}>
        <label>
          <input
            className={style.formInput}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            value={formValues.email}
          />
        </label>
        <label>
          <input
            className={style.formInput}
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            value={formValues.password}
          />
        </label>
      </form>

      <div className={style.formBreak}>
        <div className={style.horizontalLine}></div>
        <div className={style.formText}>or log in with</div>
        <div className={style.horizontalLine}></div>
      </div>

      <div className={style.Google}>
        <img src="/images/Google.png" alt="" />
      </div>

      <div className={style.alreadyAccount}>
        <p>don&#x27;t have an account ?</p>
        <Link className={style.loginLink} to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
