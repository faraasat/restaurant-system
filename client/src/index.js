import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";
import CustomRoutes from "./routes";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <CustomRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
