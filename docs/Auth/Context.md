# Auth

Auth context has already been set up in the project. So information relating to logged in user
can be accessed from any component without explicit prop drilling.

## Here is how to use it:

In any component, import the `Authcontext` and `useContext` hook.

```jsx
import { useContext } from "react";
import AuthContext from "path/to/Global/Auth/authContext";

const Component = () => {
    const authctx = useContext(AuthContext);
}
```

`authctx` has the following attributes and methods:

```js
{
    user: string,
    isLoggedIn: boolean,
    login: function,
    logout: function,
    signup: function,
}
```

#### `user` is the username of the logged in user
#### `isLoggedIn` is a boolean which indicates whether user is logged in or not
#### `login` is a helper function for login
#### `logout` is a helper function for logout
#### `signup` is a helper function for signup

---
### Using the helper functions

```jsx
import { useContext } from "react";
import AuthContext from "path/to/Global/Auth/authContext";

const handleLogin = (payload) => {
    const [status, msg] = authctx.login(payload);
    if(status === 200) { // redirect to somewhere?
    }
    else{
        // display popup using toastify?
        alert(msg);
    }
}

const handleSignup = (payload) => {
    const [status, msg] = authctx.signup(payload);
    if(status === 200) { // redirect to somewhere?
    }
    else{
        // display popup using toastify?
        alert(msg);
    }
}

const Component = () => {
    const authctx = useContext(AuthContext);
    const loginData = {
        username: "abc",
        password: "12345"
    }
    const signupData = {
        username: "abc",
        password: "12345"
        email: "abc@xyz.com",
        name: "abc xyz"
    }
    return {
        <div>
            <button onClick={() => handleLogin(loginData)}>Login</button>
            <button onClick={() => handleSignup(signupData)}>Signup</button>
            <button onClick={() => authctx.logout()}>Logout</button>
        </div>
    }
}
```

**`authctx.logout()` will clear out any state and invalidate cookies relating to the logged in user**

### Tips:

1. Before rendering `App.jsx`, make sure the user is **logged in**. Otherwise, goto to signup/login page.

```jsx
import { useContext } from "react";
import AuthContext from "path/to/Global/Auth/authContext";

const App = () => {
  const authctx = useContext(AuthContext);
  if (authctx.isLoggedIn) {
    return loggedInComponents; // Could be homepage or something like that?
  }
  return loggedOutComponents; // could be signup/login page?
};
```