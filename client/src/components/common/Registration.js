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
            <center>
                <div className=" form">
                <div className="forminit">
                <h3 className="navi">User Registration</h3>
                        
                       <div className="form-group">
                       <label htmlFor="Name" >Name</label>
                       <input className="form-control"value={name} onChange={(e) => setName(e.target.value)}/>
                       {/* <input value={form.name} onChange={(e) => addForm({name:e.target.value})}/> */}
                       </div>
                       <br></br>

                       <div className="form-group">
                       <label htmlFor="position">Select position</label>
                       <select  class="form-select" value={position} onChange={(e) => setPosition(e.target.value)}>
                       <option value="Student">Student</option>
                       <option value="Supervisor">Supervisor</option>
                       <option value="Panel Member">Panel Member</option>
                       <option value="Admin">Admin</option>
                       </select>
                       </div>
                       <br></br>

                       <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br></br>

                        <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input className="form-control"value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <br></br>
                    
                        <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <input type="address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <br></br>

                        <div className="form-group">
                        <label htmlFor="ID">User ID</label>
                        <input className="form-control" value={id} onChange={(e) => setId(e.target.value)}/>
                        </div>
                        <br></br>
                    
                        <div className="form-group">
                        <label htmlFor="Specailization">Select Specailization</label>
                       <select  class="form-select" value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                       <option value="Software Engineering">Software Engineering</option>
                       <option value="Data Science">Data Science</option>
                       <option value="Cyber Security">Cyber Security</option>
                       <option value="Information Technology">Information Technology</option>
                       </select>
                       </div>
                       <br></br>

                       <div className="form-group">
                        <label htmlFor="Password">Enter the Password</label>
                        <input type= "password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <br></br>
                    
                        <div className="form-group">
                        <label htmlFor="Password">Re enter the Password</label>
                        <input type= "password" className="form-control" value={rpassword} onChange={(e) => setRpassword(e.target.value)}/>
                        </div>
                        <br></br>
                    
                       
                        <button className="btn btn-primary" onClick={passtouser} type='submit'>Register</button>
    
                </div>
            </div>
            </center>

            </div>
        )
}

