import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Registration(){


    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [id, setId] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [password, setPassword] = useState('')
    const [rpassword, setRpassword] = useState('')

    var Group = {
       name, position, email, phone, address, id, specialization, password, rpassword
    }

    const passtouser= async () => {
      try {
        const resp = await axios.post('/user/add', Group)
        console.log(resp.data)
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }
    console.log(Group.position);


    
        return (
            <div>

                <h2>User Registration</h2>
                <form>
                        
                       <label>Name</label>
                       <input value={name} onChange={(e) => setName(e.target.value)}/>
                       {/* <input value={form.name} onChange={(e) => addForm({name:e.target.value})}/> */}

                       <br></br>
    
                       <label>Select position</label>
                       <select value={position} onChange={(e) => setPosition(e.target.value)}>
                       <option value="Student">Student</option>
                       <option value="Supervisor">Supervisor</option>
                       <option value="Panel Member">Panel Member</option>
                       <option value="Admin">Admin</option>
                       </select>
                       <br></br>

                        <label>Email</label>
                        <input  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <br></br>

                        <label>Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <br></br>
                    
                        <label>Address</label>
                        <input  value={address} onChange={(e) => setAddress(e.target.value)}/>
                        <br></br>

                        <label>User ID</label>
                        <input value={id} onChange={(e) => setId(e.target.value)}/>
                        <br></br>
                    
                        <label>Select Specailization</label>
                       <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                       <option value="Software Engineering">Software Engineering</option>
                       <option value="Data Science">Data Science</option>
                       <option value="Cyber Security">Cyber Security</option>
                       <option value="Information Technology">Information Technology</option>
                       </select>
                       <br></br>


                        <label>Enter the Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <br></br>
                    
                        <label>Re enter the Password</label>
                        <input  value={rpassword} onChange={(e) => setRpassword(e.target.value)}/>
                        <br></br>
                    
                       
                        <button onClick={passtouser} type='submit'>Register</button>
    
                </form>
            </div>
        )
}

