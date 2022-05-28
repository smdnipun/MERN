import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./common/login";
import NavBar from "./common/navBar";
import Registration from "../components/common/Registration";


const App =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/'} element={<Login/>}/>
           <Route exact path={'/reg'} element={<Registration/>}/>

       

            
            
           {/* <Fpage/> */}
         
            
    
            
           
            </Routes> 
        </div>
        </>
    )

}
export default App;