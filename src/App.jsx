import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar, Trending, Footer } from "./Components";

import routes from "./routes";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <Navbar />
      <Trending />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
