import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./common/login";
import NavBar from "./common/navBar";







const App =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/login'} element={<Login/>}/>
            </Routes>    

            <NavBar/>
            
           {/* <Fpage/> */}
         
            
    
            
        </div>
        </>
    )

}
export default App;