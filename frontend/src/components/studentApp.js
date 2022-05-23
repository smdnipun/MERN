import React from "react";
import { Route,Routes } from "react-router-dom";
import SdashBoard from "./student/sDashBoard";
import Creategroups from "./student/Creategroups"

const StudentApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/sDash'} element={<SdashBoard/>}/>
           <Route exact path={'/addgrp'} element={<Creategroups/>}/>

            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default StudentApp;