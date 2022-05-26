import React from "react";
import { Route,Routes } from "react-router-dom";
import SuppervisorDash from "./supervisour/SuppervisorDash";


const SupApp =()=>{
    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/supDash'} element={<SuppervisorDash/>}/>
            </Routes>    
        </div>
        </>
    )

}
export default SupApp;