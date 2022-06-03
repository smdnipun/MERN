import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Updateusers() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')
  const [specialization, setSpecialization] = useState('')
  const[data, setData]=useState([]);

  let params= useParams();

  const Update = () => {
    axios.post(`http://localhost:5000/user/update/${user._id}`, {
        name,position,email,phone,address,id,specialization
	})
}


const loadData = () => {
  let Id = params._id
  axios.get(`http://localhost:5000/user/u/${Id}`).then(function (response) {
    setData(response.data)
    console.log(response.data)
  })
}


useEffect(() => {
  loadData()
}, [])

  return (
    <div>
      <h1>Update User</h1>
      <form>
        
      {data.map((u) => {
          return (
            <div>
              <label>Name</label>
        <input value={u.name} onChange={(e) => setName(e.target.value)} />
        <br></br>

        <label>Email</label>
        <input value={u.email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>

        <label>Phone</label>
        <input value={u.phone} onChange={(e) => setPhone(e.target.value)} />
        <br></br>

        <label>Address</label>
        <input value={u.address} onChange={(e) => setAddress(e.target.value)} />
        <br></br>

        <label>User ID</label>
        <input value={u.id} onChange={(e) => setId(e.target.value)} />
        <br></br>

        <label>Specialization</label>
        <input
          value={u.specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <br></br>
            </div>
          )
        })}
  
         <button onClick={Update} type='submit'>Update</button>
        </form>
        </div>
    )
}
