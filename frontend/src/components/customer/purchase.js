import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function DisplayPurchase(){

    
    // const getData = async () => {
    //     const response = await axios.get("/getData");
    //     console.log(response);
    //   };
    //   useEffect(() => {
    //     getData();
    //   }, []);
    

    const [item, setItem]=useState([]);

    useEffect(() => {
        axios.get(`/purchase/getData`)
            .then((response) => {
                setItem(response.data);
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
                    <td>Item name</td>
                    <td>Unit price</td>
                    <td>Quantity</td>
                    <td>Discount price</td>
                    <td>Total</td>
                  
                </tr>
                
            
            {item.map((data)=>{
                return(    
                    <tr>
                  <td>{data.iname}</td>
                  <td> {data.uprice}</td>
                  <td>{data.quantity}</td>
                  <td>{data.discountP}</td>
                  <td>{data.total}</td>
                  
                </tr>
             )})}
            </table>
        </div>
    )




}