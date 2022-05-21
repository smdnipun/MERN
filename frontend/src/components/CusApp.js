import React from "react";
import { Route,Routes } from "react-router-dom";
import AddtoCart from "./customer/AddtoCart";
import AddtoWishlist from "./customer/addToWishlist";
import Buy from "./customer/Buy";
import CusFpage from "./customer/CusFpage";
import CusReg from "./customer/CusReg";
import DisplayPurchase from "./customer/purchase";
import CusView from "./customer/viewItems";


const CusApp=()=>{
 return(
<div>
    <Routes>
    <Route exact path="/buy" element={<Buy/>}/>
    <Route exact path="/cusReg" element={<CusReg/>}/>
    <Route exact path="/cusfpage" element={<CusFpage/>}/>
    <Route exact path="/view" element={<CusView/>}/>
     <Route exact path="/addToCart" element={<AddtoCart/>}/>
     <Route exact path="/addToWishlist" element={<AddtoWishlist/>}/>
     <Route exact path="/purchase" element={<DisplayPurchase/>}/>
        {/* <CusFpage/> */}    
    </Routes>

    {/* <CusView/> */}
  

</div>
 )

}
export default CusApp;