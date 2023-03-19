import { useState, useContext } from "react";
import AuthContext from "../../Global/Auth/authContext";

const InputElement = ({ htmlLabel, placeholderText, stateHandler, stateField }) => {
  return (
    <div>
      <label htmlFor={htmlLabel}>{htmlLabel}</label>
      <input
        placeholder={placeholderText}
        onChange={(e) => {
          stateHandler((prev) => {
            const current = { ...prev };
            current[stateField] = e.target.value;
            return current;
          });
        }}
      ></input>
    </div>
  );
};

const SignupCard = () => {
  const authctx = useContext(AuthContext);
  const [payload, setpayload] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });
  return (
    <div>
      <InputElement
        htmlLabel="Username"
        placeholderText="Enter Username"
        stateHandler={setpayload}
        stateField="username"
      />
      <InputElement
        htmlLabel="Password"
        placeholderText="Enter Password"
        stateHandler={setpayload}
        stateField="password"
      />
      <InputElement
        htmlLabel="Email"
        placeholderText="Enter Email"
        stateHandler={setpayload}
        stateField="email"
      />
      <InputElement
        htmlLabel="Name"
        placeholderText="Enter Name"
        stateHandler={setpayload}
        stateField="name"
      />
      <button onClick={() => authctx.login(payload)}>Signup</button>
    </div>
  );
};

export default SignupCard;
