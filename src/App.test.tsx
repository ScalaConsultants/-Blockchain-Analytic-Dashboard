import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import configureStore from "./store";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = configureStore();

  ReactDOM.render(
    <StoreContext.Provider
      value={store}>
      <App />
    </StoreContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
