import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function CusView(){

    
    // const getData = async () => {
    //     const response = await axios.get("/getData");
    //     console.log(response);
    //   };
    //   useEffect(() => {
    //     getData();
    //   }, []);
    

    const [item, setItem]=useState([]);

    useEffect(() => {
        axios.get(`item/getData`)
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
             <li><a href="/view">Home</a></li>
             <li><a href="/addToCart">Cart</a></li>
            <li><a href="/addToWishlist">Wish List</a></li>
            <li><a href="">About</a></li>
            </ul>
            
            {item.map((data)=>{
                return(    
                      
                    <div class="card">
                    <div class="container">
                      <h4><b>{data.iname}...</b></h4>
                      <p>{data.uprice}.00</p>
                      <p>Remain:{data.quantity}</p>
                      <p>{data.description}</p>
                      <h4>Discount price:{data.discountP}</h4>
                     <Link to={"/buy"} > <button onClick={()=>setData(data)}>Buy</button></Link>
                      <Link to={"/addToCart"}><button onClick={()=>setData(data)}>Add to cart</button></Link>
                     <Link to={"/addToWishlist"}> <button onClick={()=>setData(data)}>Addto wishlist</button></Link>
                    </div>
                  </div>    
                  
                      
                  
               
             )})}
            
        </div>
    )




}