import React, { useEffect, useState } from "react";
import axios from "axios";



export default function DisplayCus(){

    
    

    const [customer, setCustomer]=useState([]);

    useEffect(() => {
        axios.get(`/customer/getData`)
            .then((response) => {
                setCustomer(response.data);
            })
    }, [])
        
    
    return(

        <div>
             <ul>
                 <li><a href="/displayItem">Home</a></li>
                <li><a href="/add">Add a Item</a></li>
                <li><a href="/cusdisplay">Customers</a></li>
  
            </ul>
            <table>
            <tr>
                    <td>Customer name</td>
                    <td>Phone Number</td>
                    <td>Address</td>
                  
                </tr>
                
            
            {customer.map((data)=>{
                return(    
                    <tr>
                  <td>{data.cname}</td>
                  <td> {data.phoneNo}</td>
                  <td>{data.adddress}</td>
                </tr>
             )})}
            </table>
        </div>
    )




}