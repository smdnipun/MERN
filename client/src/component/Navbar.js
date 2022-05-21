import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
           <Link to = "/student">Student</Link>
          <Link to = "/student">Admin</Link>
        </div>
        
        
    )
}
export default Navbar;