import React from "react";

function Navbar() {
    return(
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/reg">Reg</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
      </ul>
    )
}
export default Navbar;