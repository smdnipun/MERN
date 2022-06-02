import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Viewgroups() {
  const [users, setUsers] = useState([]);


// This method fetches the records from the database.
useEffect(() => {
  axios.get('/user')
      .then((response) => {
          setUsers(response.data);
      })
}, [])


const setData = (data) => {
    let { name, position, email, phone, address, id, specialization } = data;
    localStorage.setItem('name', name);
    localStorage.setItem('position', position);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address)
    localStorage.setItem('id', id)
    localStorage.setItem('specialization', specialization)
}


  // This following section will display the table with the records of individuals.
  return (
      <div>
        <center>

        <h3 className="navi">Registered Users</h3>
        <br></br>
        <table
          class="table"
          style={{ marginTop: 50, width: 700 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>User ID</th>
              <th>Specialization</th>

            </tr>
          </thead>
          <tbody>
              {
                    users.map(g=>(
                        <tr>
                            <td>{g.name}</td>
                            <td>{g.position}</td>
                            <td>{g.email}</td>
                            <td>{g.phone}</td>
                            <td>{g.address}</td>
                            <td>{g.id}</td>
                            <td>{g.specialization}</td>
                             <td> <Link to={'/edituser'}>
                        <button onClick={()=>setData(data)}>update</button>
                        </Link></td>
                        </tr>
                    ))
              }
          </tbody>
        </table>

        </center>
       
      </div>
  )
}

