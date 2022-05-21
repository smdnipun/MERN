import React from "react";
import { Route,Routes } from "react-router-dom";
import SupdashBoard from "./Supervisour/supDashBoard";








const SupApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/supDash'} element={<SupdashBoard/>}/>
            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default SupApp;