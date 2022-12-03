import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar, Footer } from "./Components";

import routes from "./routes";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
