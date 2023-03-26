import { useReducer, useMemo } from "react";
import AuthContext from "./authContext";
import * as authActions from "./authActions";

const initialAuthState = {
  user: localStorage.getItem("user"),
  isLoggedIn: !!localStorage.getItem("user"),
};

const authStateReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOGIN: {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }
    case authActions.LOGOUT: {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return initialAuthState;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authStateReducer, initialAuthState);

  const handleSignup = async (payload) => {
    const response = await fetch(`${import.meta.env.VITE_GG_API_BASE_URI}/auth/signup`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  };

  const handleLogin = async (payload) => {
    const response = await fetch(`${import.meta.env.VITE_GG_API_BASE_URI}/auth/login`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data.msg));
      dispatch({
        type: authActions.LOGIN,
        payload: data.msg,
      });
    }
    return data;
  };

  const handleLogout = async () => {
    const response = await fetch(`${import.meta.env.VITE_GG_API_BASE_URI}/auth/logout`, {
      credentials: "include",
    });
    const data = await response.json();
    localStorage.removeItem("user");
    dispatch({ type: authActions.LOGOUT });
    return data;
  };

  const authctxMemo = useMemo(() => {
    return {
      user: authState.user,
      isLoggedIn: authState.isLoggedIn,
      login: handleLogin,
      logout: handleLogout,
      signup: handleSignup,
    };
  }, [authState]);

  return <AuthContext.Provider value={authctxMemo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
