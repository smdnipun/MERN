import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuid } from 'uuid';
   

export default function CusReg() {

  const id = uuid();
  const [cname, setCname] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [adddress, setAddress] = useState('')


  const newCustomer = {
   id,  cname, phoneNo, adddress
  }
  const sendPostReq = async () => {
    try {
      const resp = await axios.post('/customer/add', newCustomer)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  
  return (
    <div className='center'>
            <h1 className='center'>Customer Registration</h1>
      <form >
        <label>Customer Name</label>
        <input onChange={(e) => setCname(e.target.value)} />
        <br /><br />

        <label>Phone Number</label>
        <input onChange={(e) => setPhoneNo(e.target.value)} />
        <br /><br />

        <label>Address</label>
        <input onChange={(e) => setAddress(e.target.value)} />
        <br /><br />

    
        <Link to={'/cusfpage'}>
        <button onClick={sendPostReq}  type='submit'>
          Submit
        </button>
        </Link>
      </form>
    </div>
  )
}
