import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/aDashBoard";










const AdminApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
            </Routes>    
        
        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default AdminApp;