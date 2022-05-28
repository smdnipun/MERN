import React, {  useEffect, useState } from 'react';
import axios from 'axios';

export default function Registertopic(){


    const [gid, setGid] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [topic, setTopic] = useState('')
    const [groups, setGroups] = useState([]);
    
       
useEffect(() => {
    axios.get('/group')
        .then((response) => {
            setGroups(response.data);
        })
    }, [])
    

    useEffect(() => {
    
          async function getGroups() {
           const responseu = await fetch(`http://localhost:5000/group/`);

    
            const groups = await responseu.json();
      
            setGroups(groups);
          }
    
          getGroups();
        
        return;
      },);




    var Topic = {
       gid, specialization, topic
    }

    const pass= async () => {
      try {
        const resp = await axios.post('/topic/add', Topic)
        console.log(resp.data)
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }

    
        return (
            <div>

                <h2>Register Topic</h2>
                <form>
                        
                       <label>Group ID</label>
                       <select class="form-select"  value={gid} onChange={(e) => setGid(e.target.value)} >
                        {                          
                            groups.map(u=>(
                            <option value={u.gid}>{u.gid}</option>
                        ))}
                       </select>
    
                        <label>Research Topic</label>
                        <input value={topic} onChange={(e) => setTopic(e.target.value)}/>
                        <br></br>
                    
                        <label>Specialization</label>
                        <select class="form-select"  value={specialization} onChange={(e) => setSpecialization(e.target.value)} >
                            <option>Software Engineering</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Information Technology</option>

                        </select>
                        <br></br>
  
                        <button onClick={pass} type='submit'>Submit</button>
    
                </form>
            </div>
        )
}

