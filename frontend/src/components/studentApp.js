import React from "react";
import { Route,Routes } from "react-router-dom";
import SdashBoard from "./student/sDashBoard";








const StudentApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/sDash'} element={<SdashBoard/>}/>
            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default StudentApp;