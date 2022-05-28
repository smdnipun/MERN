import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Creategroups(){


    const [gid, setGid] = useState('')
    const [first, setFirst] = useState('')
    const [email1, setEmail1] = useState('')
    const [second, setSecond] = useState('')
    const [email2, setEmail2] = useState('')
    const [third, setThird] = useState('')
    const [email3, setEmail3] = useState('')
    const [forth, setForth] = useState('')
    const [email4, setEmail4] = useState('')
    

    var Group = {
       gid, first, email1, second, email2, third, email3, forth, email4
    }

    const passtogroup= async () => {
      try {
        const resp = await axios.post('/group/add', Group)
        console.log(resp.data)
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }

    
        return (
            <div>

                <h2>Create Group</h2>
                <form>
                        
                       <label>Group ID</label>
                       <input value={gid} onChange={(e) => setGid(e.target.value)}/>
                       <br></br>
    
                        <label>First Member</label>
                        <input value={first} onChange={(e) => setFirst(e.target.value)}/>
                        <br></br>
                    
                        <label>First Member Email</label>
                        <input  value={email1} onChange={(e) => setEmail1(e.target.value)}/>
                        <br></br>

                        <label>Second Member</label>
                        <input value={second} onChange={(e) => setSecond(e.target.value)}/>
                        <br></br>
                    
                        <label>Second Member Email</label>
                        <input  value={email2} onChange={(e) => setEmail2(e.target.value)}/>
                        <br></br>

                        <label>Third Member</label>
                        <input value={third} onChange={(e) => setThird(e.target.value)}/>
                        <br></br>
                    
                        <label>Third Member Email</label>
                        <input  value={email3} onChange={(e) => setEmail3(e.target.value)}/>
                        <br></br>

                        <label>Forth Member</label>
                        <input value={forth} onChange={(e) => setForth(e.target.value)}/>
                        <br></br>
                    
                        <label>First Member Email</label>
                        <input  value={email4} onChange={(e) => setEmail4(e.target.value)}/>
                        <br></br>
                    
                       
                        <button onClick={passtogroup} type='submit'>Create</button>
    
                </form>
            </div>
        )
}

