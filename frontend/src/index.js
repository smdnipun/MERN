import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import CusApp from "./components/CusApp";
import TraderApp from "./components/TraderApp";

ReactDOM.render(
    <BrowserRouter><App/><CusApp/><TraderApp/></BrowserRouter>,
    document.getElementById("root")
)