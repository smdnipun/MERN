import React from "react";
import { Route,Routes } from "react-router-dom";
import Create from "./trader/AddItems";
import AddPromo from "./trader/AddPromotion";
import Edit from "./trader/editItem";
import Display from "./trader/getItems";
import TraderFpage from "./trader/Traderfpage";
import TraderReg from "./trader/TraderReg";
import DisplayCus from "./trader/viewCustomer";


const TraderApp=()=>{

    return(
        <div>
            <Routes>
           <Route exact path="/traderReg" element={<TraderReg/>}/>
            <Route exact path="/update" element={<Edit/>}/> 
            <Route exact path="/add" element={<Create/>}/> 
            <Route exact path="/cusdisplay" element={<DisplayCus/>}/>
            <Route exact path="/traderFpage" element={<TraderFpage/>}/>
            <Route exact path='/displayItem' element={<Display/>}/>
            <Route exact path="/addPromo" element={<AddPromo/>}/>
            </Routes>
            
          
        </div>                                                                                                                  
    )


}
export default TraderApp;