import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, Error, Bookmark, ArticlePage, CreateArticle } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/posts" element={<ArticlePage />} />
        <Route path="*" element={<Error error="Looks Like You Are Out Of Grids"/>} />
        <Route path="/create-article" element={<CreateArticle/>} />
        <Route path="*" element={<Error error="Error" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
