import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Display(){

    
    // const getData = async () => {
    //     const response = await axios.get("/getData");
    //     console.log(response);
    //   };
    //   useEffect(() => {
    //     getData();
    //   }, []);
    

    const [item, setItem]=useState([]);

    useEffect(() => {
        axios.get(`/item/getData`)
            .then((response) => {
                setItem(response.data);
            })
    }, [])

    

        const setData = (data) => {
            let {item_id,iname,uprice,quantity,description,discount,discountP} = data;
            localStorage.setItem('item_id', item_id);
            localStorage.setItem('iname', iname);
            localStorage.setItem('uprice', uprice);
            localStorage.setItem('quantity',quantity);
            localStorage.setItem('description',description);
            localStorage.setItem('discount',discount);
            localStorage.setItem('discountP',discountP);
           
          
        }
        
    
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
                    <td>Description</td>
                    <td>Discount</td>
                    <td>Discount Price</td>
                </tr>
                
            
            {item.map((data)=>{
                return(    
                    <tr>
                  <td>{data.iname}</td>
                  <td> {data.uprice}</td>
                  <td>{data.quantity}</td>
                  <td>{data.description}</td>
                  <td>{data.discount}</td>
                  <td>{data.discountP}</td>
                  <td>                              
                        <Link to={'/update'}>
                        <button onClick={()=>setData(data)}>update</button>
                        </Link>
                               
                  </td>
                  <td>                              
                        <Link to={'/addPromo'}>
                        <button onClick={()=>setData(data)}>Add Promotions</button>
                        </Link>
                               
                  </td>
                  
                </tr>
             )})}
            </table>
        </div>
    )




}