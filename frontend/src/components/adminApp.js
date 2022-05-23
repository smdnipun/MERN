import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/aDashBoard";
import Viewusers from "../components/admin/Viewusers";
import Updateusers from "../components/admin/Updateusers";









import CreateMarkingSchemes from "./admin/createMarkingS";

const AdminApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
           <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            </Routes>    
        
        
            
                <Route exact path={'/aDash'} element={<AdashBoard/>}/>
                <Route exact path={'/createMarking'} element={<CreateMarkingSchemes/>}/>
            </Routes>      
           {/* <Fpage/> */}
        </div>
        </>
    )

}
export default AdminApp;