import React from "react";
import { Route,Routes } from "react-router-dom";
import PdashBoard from "./panelMember/paneldashbord";








const PanelApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/pDash'} element={<PdashBoard/>}/>
            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default PanelApp;