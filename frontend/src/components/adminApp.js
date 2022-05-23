import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/aDashBoard";
import PanelCreateMarkingSchemes from "./admin/PanelCreateMarkingS";
import SupCreateMarkingSchemes from "./admin/SupCreateMarking"










const AdminApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
           <Route exact path={'/pcreateMarking'} element={<PanelCreateMarkingSchemes/>}/>
           <Route exact path={'/smarking'} element={<SupCreateMarkingSchemes/>}/>
            </Routes>    
        
        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default AdminApp;