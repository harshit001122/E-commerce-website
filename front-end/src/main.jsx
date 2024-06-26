import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>
);
