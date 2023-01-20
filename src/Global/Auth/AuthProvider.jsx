import { useReducer, useMemo } from "react";
import AuthContext from "./authContext";
import * as authActions from "./authActions";

const initialAuthState = {
  user: {
    uid: null,
    name: null,
    username: null,
  },
  isLoggedIn: false,
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

  const handleLogin = () => {
    dispatch({
      type: authActions.LOGIN,
      /* Dummy payload */
      payload: { uid: 777, name: "Jaydeep", username: "JDeep" },
    });
  };

  const handleLogout = () => {
    dispatch({ type: authActions.LOGOUT });
  };

  const authctxMemo = useMemo(() => {
    return {
      user: authState.user,
      isLoggedIn: authState.isLoggedIn,
      login: handleLogin,
      logout: handleLogout,
    };
  }, [authState]);

  return <AuthContext.Provider value={authctxMemo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
