import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { v4 as uuid } from 'uuid';
   

export default function Create() {

  const item_id = uuid();
  const [iname, setIname] = useState('')
  const [uprice, setUprice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [description, setDescription] = useState('')
  const [discount,setDiscount]=useState('0')
  const [discountP,setDiscountP]=useState('0')

  const newItem = {
   item_id,  iname, uprice, quantity, description,discount,discountP
  }
  const sendPostReq = async () => {
    try {
      const resp = await axios.post('item/add', newItem)
      console.log(resp.data)
      
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }

  }
  
  return (

    <div>
       <ul>
       <li><a href="/displayItem">Home</a></li>
       <li><a href="/add">Add a Item</a></li>
       <li><a href="/cusdisplay">Customers</a></li>
  
    </ul>
    <div className='center'>
            <h1 className='center'>Add Items</h1>
      <form >
        <label>Item Name</label>
        <input onChange={(e) => setIname(e.target.value)} />
        <br /><br />

        <label>Unit price</label>
        <input onChange={(e) => setUprice(e.target.value)} />
        <br /><br />

        <label>Quantity</label>
        <input onChange={(e) => setQuantity(e.target.value)} />
        <br /><br />

        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} />
        <br /><br />

        {/* <label>Discount</label>
        <input value={0} onChange={(e) => setDiscount(e.target.value)} />
        <br/><br/> */}
        <Link to={'/displayItem'}>
        <button onClick={sendPostReq} type='submit'>
          Submit
        </button>
        </Link>
      </form>
    </div>
    </div>
   
  )
}