import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPosts } from "./actions/posts.actions";
import { getUser } from "./actions/user.actions";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPosts());
store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
