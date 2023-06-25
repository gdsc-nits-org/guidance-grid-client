import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./Global/Auth/AuthProvider";
import { ScrollToTop } from "./Components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
