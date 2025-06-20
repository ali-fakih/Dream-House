import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Define the initial state inline
const initialState = {
  userId: null,
  fullName: "",
  email: "",
  image: null,
  agentId: null,
};

// Define the reducer inline
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        email: action.payload.email,
        image: action.payload.image,
      };
    case "SET_AGENT_ID":
      return {
        ...state,
        agentId: action.payload.agentId,
      };
    default:
      return state;
  }
};

// Create the store directly in index.js
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
