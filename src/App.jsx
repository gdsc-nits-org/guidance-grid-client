import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import {
  Home,
  Error,
  Bookmark,
  ArticlePage,
  CreateArticle,
  ProfilePage,
  ProfileEdit,
  Landing
} from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/posts" element={<ArticlePage />} />
        <Route path="*" element={<Error error="Looks Like You Are Out Of Grids" />} />
        <Route path="/user/profile" element={<ProfilePage user="1" />} />
        <Route path="/user/profileedit" element={<ProfileEdit />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="*" element={<Error error="Error" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
