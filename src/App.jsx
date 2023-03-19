import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Global/Auth/authContext";
import { Footer, Navbar } from "./Components";
import { Home, Error, Bookmark, SignUp } from "./Pages";

const loggedInComponents = (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmark />} />
      <Route path="*" element={<Error error="Error" />} />
    </Routes>
    <Footer />
  </>
);

const loggedOutComponents = <SignUp />;

const App = () => {
  const authctx = useContext(AuthContext);
  if (authctx.isLoggedIn) {
    return loggedInComponents;
  }
  return loggedOutComponents;
};

export default App;
