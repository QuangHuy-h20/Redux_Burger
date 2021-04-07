import React from "react";
import ReactDOM from "react-dom";
import "./styles/";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Setup redux
import { createStore } from "redux";
//Connect redux and react
import { Provider } from "react-redux";

//Import rootReducer
import rootReducer from "./redux/reducer/rootReducer";

//Create store from rootReducer
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
