import React from "react";
import { Route,Routes } from "react-router-dom";
import ViewMarkingSchemes from "./panelMember/MarkingScheme";
import PdashBoard from "./panelMember/paneldashbord";








const PanelApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/pDash'} element={<PdashBoard/>}/>
           <Route exact path={'/viewMarking'} element={<ViewMarkingSchemes/>}/>
            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default PanelApp;