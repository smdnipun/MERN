import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./common/Login";
import NavBar from "./common/navBar";
import Registration from "../components/common/Registration";
import Viewusers from "../components/admin/Viewusers";
import Updateusers from "../components/admin/Updateusers";
import Calculations from "./admin/test";

const App =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/'} element={<Login/>}/>
           <Route exact path="/reg" element={<Registration/>}/>
       

            
            
           {/* <Fpage/> */}
         
            
    
            
            <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            <Route exact path="/cal" element={<Calculations/>}/>
            </Routes> 
        </div>
        </>
    )

}
export default App;