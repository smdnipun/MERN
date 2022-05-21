import React from "react";
import { Route,Routes } from "react-router-dom";
import CusApp from "./CusApp";
import CusReg from "./customer/CusReg";
import Fpage from "./Frontpage";
import TraderReg from "./trader/TraderReg";
import TraderApp from "./TraderApp";






const App =()=>{

    return(
        <>
        <div>
            <Routes>
            <Route exact path="/customer" element={<CusApp/>}/>
            <Route exact path="/trader" element={<TraderApp/>}/>
            <Route exact path="/" element={<Fpage/>}/>
            </Routes>    

        
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default App;