import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className={style.formContainer}>
      <div className={style.formHeader}>Create an Account</div>
      <form className={style.SignupForm}>
        <label>
          <input
            className={style.formInput}
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            value={formValues.name}
          />
        </label>
        <label>
          <input
            className={style.formInput}
            type="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
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
      <div className={style.btncont}>
        <button className={style.signupbtn}>Sign Up</button>
      </div>

      <div className={style.formBreak}>
        <div className={style.horizontalLine}></div>
        <div className={style.formText}>or sign up with</div>
        <div className={style.horizontalLine}></div>
      </div>

      <div className={style.Google}>
        <img src="/images/Google.png" alt="" />
      </div>

      <div className={style.alreadyAccount}>
        <p>already have an account ?</p>
        <Link className={style.loginLink} to="/signin">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
