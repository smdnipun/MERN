import React from "react";
import { Route,Routes } from "react-router-dom";
import StudentDash from "./student/StudentDash";

const StudentApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/sDash'} element={<StudentDash/>}/>
            </Routes>    
        </div>
        </>
    )

}
export default StudentApp;