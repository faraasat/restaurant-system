import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import CustomRoutes from "./routes";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <CustomRoutes />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
