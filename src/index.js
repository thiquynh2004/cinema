import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/types/configStore";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./index.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
