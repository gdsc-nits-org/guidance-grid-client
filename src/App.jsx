import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, Error, Bookmark } from "./Pages";
import About from "./Pages/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="*" element={<Error error="Error" />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
