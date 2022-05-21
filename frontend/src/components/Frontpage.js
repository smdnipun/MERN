import React from "react";
import { Link } from "react-router-dom";

const Fpage=()=>{

    return(
        <div>
            <h1> Welcome To ShoppingCart</h1>
            <Link to={'/cusReg'}>
                <button>
                Customer Registration
            </button>
            </Link> 

            <Link to={'/traderReg'}>
                <button>
                    Trader Registration
                </button>
            </Link> 


               {/* <ul>
  <li><a href="/cusReg">Customer Registration</a></li>
  <li><a href="/traderReg">Trader Registration</a></li>
</ul> */}

        </div>

    )

}
export default Fpage