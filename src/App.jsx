import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, Error, Bookmark, ProfilePage } from "./Pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="*" element={<Error error="Error" />} />
        <Route path="/user/profile" element={<ProfilePage user="1" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
