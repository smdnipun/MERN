import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Viewgroups() {

    const [Item, setItem] = useState([]);
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    // const Id= nextId();
   
useEffect(() => {
    axios.get('/group')
        .then((response) => {
            setItem(response.data);
        })
    axios.get('/user').then((responseu)=>{
        setUsers(responseu.data);
    })
    }, [])
    

    useEffect(() => {
    
          async function getUsers() {
           const responseu = await fetch(`http://localhost:5000/user/`);

    
            const users = await responseu.json();
            let filterusers = users.filter(g => g.position=="Panel Member");
      
            setUsers(users);
            setFiltered(filterusers);
          }
    
          getUsers();
        
        return;
      },);


    return (
        <div>
            <h2>Group List</h2>
            <table>
                <tr>
                    <th>Group Id</th>
                    <th>First Member</th>
                    <th>First Member Email</th>
                    <th>Second Member</th>
                    <th>Second Member Email</th>
                    <th>Third Member</th>
                    <th>Third Member Email</th>
                    <th>Forth Member</th>
                    <th>Forth Member Email</th>
                    <th>Allocate Panel Member</th>


                </tr>
                {Item.map((data) => {
                     return (
                <tr>
                    <td>{data.gid}</td>
                    <td>{data.first}</td>
                    <td>{data.email1}</td>
                    <td>{data.second}</td>
                    <td>{data.email2}</td>
                    <td>{data.third}</td>
                    <td>{data.email3}</td>
                    <td>{data.forth}</td>
                    <td>{data.email4}</td>
                    <td>
                            <select class="form-select" aria-label="Default select example">
                                {                          
                               filtered.map(u=>(
                                 <option value={u.name}>{u.name}</option>
                                ))}
                            </select>
                            </td>

                </tr>
                )})}
               
            </table>
        </div>
    )
}