import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, Error, Bookmark, CreateArticle} from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/create-article" element={<CreateArticle/>} />
        <Route path="*" element={<Error error="Error" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
