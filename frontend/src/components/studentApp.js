import React from "react";
import { Route,Routes } from "react-router-dom";
import SdashBoard from "./student/sDashBoard";
import Creategroups from "./student/Creategroups"
import StudentDash from "./student/StudentDash";

const StudentApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/sDash'} element={<SdashBoard/>}/>
           <Route exact path={'/addgrp'} element={<Creategroups/>}/>

           <Route exact path={'/sDash'} element={<StudentDash/>}/>
            </Routes>    
        </div>
        </>
    )

}
export default StudentApp;