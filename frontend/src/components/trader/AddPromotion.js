import React, { useHistory,useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function AddPromo(){


    const [iname, setIname] = useState('')
    const [uprice, setUprice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [discount,setDiscount]=useState('')
    const [discountP,setDiscountP]=useState('')

    let P=uprice*discount/100;

    const updateItem = () => {
      axios.put(`/item/update/${item_id}`, {
         iname,
         uprice,
         quantity,
         description,
         discount,
         discountP:P
    })
    
  }
  


    // const postData = () => {
    //     axios.post(`/add`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     }).then(() => {
    //         history.push('/')
    //     })
    // }
const[item_id,setID]=useState(null);

useEffect(() => {
        setID(localStorage.getItem('item_id'))
        setIname(localStorage.getItem('iname'));
        setUprice(localStorage.getItem('uprice'));
        setQuantity(localStorage.getItem('quantity'));
        setDescription(localStorage.getItem('description'));
        setDiscount(localStorage.getItem('discount'));
        setDiscountP(localStorage.getItem('discountP'))
}, []);



    return(

        <div>
              <form >
        <label>Item Name</label>
        <input value={iname} onChange={(e) => setIname(e.target.value)} />
        <br /><br />

        <label>Unit price</label>
        <input value={uprice} onChange={(e) => setUprice(e.target.value)} />
        <br /><br />

        <label>Quantity</label>
        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <br /><br />

        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <br /><br />

        <label>Discount</label>
        <input value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <br /><br />

      
        <Link to={'/displayItem'}><button onClick={updateItem} type='submit'>
          Submit
        </button>
        </Link>
      </form>

        </div>

    )




}