import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./common/Login";
import NavBar from "./common/navBar";
import Registration from "../components/common/Registration";
import Viewusers from "../components/admin/Viewusers";
import Updateusers from "../components/admin/Updateusers";

const App =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/'} element={<Login/>}/>
           <Route exact path="/reg" element={<Registration/>}/>
            <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            </Routes> 
        </div>
        </>
    )

}
export default App;