import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AdminApp from "./components/AdminApp";
import App from "./components/App";
import PanelApp from "./components/PanelApp";
import StudentApp from "./components/StudentApp";
import SupApp from "./components/SupApp";


ReactDOM.render(
    <BrowserRouter>
    <App/>
    <AdminApp/>
    <PanelApp/>
    <StudentApp/>
    <SupApp/>
    </BrowserRouter>,
    document.getElementById("root")
)