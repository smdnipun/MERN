import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Updateusers() {

const [name, setName] = useState('')
const [position, setPosition] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [address, setAddress] = useState('')
const [id, setID] = useState('')
const [specialization, setSpecialization] = useState('')


const Updateuser = () => {
    axios.put(`/user/update/${id}`, {
        name,
        position,
        email,
        phone,
        address,
        id,
        specialization    
	})
}

useEffect(() => {
        setName(localStorage.getItem('name'))
        setPosition(localStorage.getItem('position'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setAddress(localStorage.getItem('address'));
        setID(localStorage.getItem('id'));
        setSpecialization(localStorage.getItem('specialization'));
}, []);

    return (
        <div>

            <h1>Update User</h1>
            <form>

                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                    <br></br>
                
                    <label>Position</label>
                    <input  value={position} onChange={(e) => setPosition(e.target.value)}/>
                    <br></br>
                
                    <label>Email</label>
                    <input  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br></br>

                    <label>Phone</label>
                    <input  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <br></br>

                    <label>Address</label>
                    <input  value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <br></br>

                    <label>User ID</label>
                    <input  value={id} onChange={(e) => setID(e.target.value)}/>
                    <br></br>

                    
                    <label>Specialization</label>
                    <input  value={specialization} onChange={(e) => setSpecialization(e.target.value)}/>
                    <br></br>

                    <button onClick={Updateuser} type='submit'>Update</button>
            </form>
        </div>
    )
}