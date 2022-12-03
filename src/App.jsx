import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home } from "./Pages";

// import routes from "./routes";

// const router = createBrowserRouter(routes);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
