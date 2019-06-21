import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContextApp from "./context/contextApp";
import * as serviceWorker from "./serviceWorker";
import { DvaApp } from "./dva/dvaApp";

// ReactDOM.render(<ContextApp />, document.getElementById('root'));
ReactDOM.render(<DvaApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
