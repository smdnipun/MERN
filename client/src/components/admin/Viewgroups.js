import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Viewgroups() {
  const [Item, setItem] = useState([])
  const [users, setUsers] = useState([])



    console.log(panelMember);

const loadData=() =>{

    axios.get('/group')
        .then((response) => {
            setItem(response.data);
        })
}

   const filterData=()=>{
    axios
    .post('http://localhost:5000/user/allocatepanel', {
      specialization: Item.specialization,
      position: "Panel Member",
    })
    .then((res) => {
      setUser(res.data)
   })
   }



   useEffect(() => {
    loadData();
    filterData();
    }, []);
    


      setUsers(users)
      setFiltered(filterusers)
    

      const Update = (group) => {
        axios.post(`http://localhost:5000/group/update/${group._id}`, {
          panelMember: group.panelMember 
        })
        console.log(group._id)
      }

    
    return (
        <div>

            <center>

            <h3 className="navi">Registered Groups</h3>
            <br></br>
            <table class= "table">
                <tr>
                <th scope="col">Group Name</th>
                <th scope="col">Specialization</th>
                <th scope="col">First Member</th>
                <th  scope="col">First Member Email</th>
                <th  scope="col">Second Member</th>
                <th  scope="col">Second Member Email</th>
                <th  scope="col">Third Member</th>
                <th  scope="col">Third Member Email</th>
                <th  scope="col">Forth Member</th>
                <th  scope="col">Forth Member Email</th>
                <th  scope="col">Allocate Panel Member</th>

                </tr>
                {Item.map((data) => {
                     return (
                <tr>
                    <td>{data.gid}</td>
                    <td>{data.specialization}</td>
                    <td>{data.first}</td>
                    <td>{data.email1}</td>
                    <td>{data.second}</td>
                    <td>{data.email2}</td>
                    <td>{data.third}</td>
                    <td>{data.email3}</td>
                    <td>{data.forth}</td>
                    <td>{data.email4}</td>
                    <td>
                    <select value= {data.panelMember} class="form-select" aria-label="Default select example"  onChange={(e) =>{
                        let index= Item.indexOf(data);
                        const item= [...Item];
                        item[index].panelMember=e.target.value;
                        setItem(item);
                        }}>
                        {                          
                            user.map(u=>(
                            <option value={u.name}>{u.name}</option>
                        ))}
                    </select>
                           <button 
                           className='btn btn-primary'
                           onClick={()=>Update(data)}>Update</button>
                    </td>

                </tr>
                )})}
               
            </table>

            </center>
           
        </div>
    )
}

                            

                            