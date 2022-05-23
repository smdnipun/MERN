import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/aDashBoard";
import Viewusers from "./admin/Viewusers";
import Updateusers from "./admin/Updateusers";
import Addfiles from "./admin/Addfiles";


import CreateMarkingSchemes from "./admin/createMarkingS";

const AdminApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
           <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            <Route exact path="/addfiles" element={<Addfiles/>}/>
            </Routes>          
           {/* <Fpage/> */}
        </div>
        </>
    )

}
export default AdminApp;