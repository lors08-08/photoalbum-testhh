import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import store from "./redux/index";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./components/styled/theme/globalStyles";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
