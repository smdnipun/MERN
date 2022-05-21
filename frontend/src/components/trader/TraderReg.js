import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuid } from 'uuid';
   

export default function TraderReg() {

  const id = uuid();
  const [tname, setTname] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [adddress, setAddress] = useState('')


  const newTrader = {
   id,  tname, phoneNo, adddress
  }
  const sendPostReq = async () => {
    try {
      const resp = await axios.post('/trader/add', newTrader)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  
  return (
    <div className='center'>
            <h1 className='center'>Trader Registration</h1>
      <form >
        <label>Trader Name</label>
        <input onChange={(e) => setTname(e.target.value)} />
        <br /><br />

        <label>Phone Number</label>
        <input onChange={(e) => setPhoneNo(e.target.value)} />
        <br /><br />

        <label>Address</label>
        <input onChange={(e) => setAddress(e.target.value)} />
        <br /><br />

    
        <Link to={'/traderFpage'}>
        <button onClick={sendPostReq}  type='submit'>
          Submit
        </button>
        </Link>
      </form>
    </div>
  )
}
