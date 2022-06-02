import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './navBar'
import { NavLink } from 'react-router-dom'

export default function DashBoard() {
  //Panel Member
  const [data, setData] = useState([])

  const loadData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/panel/${name}`)
      .then(function (response) {
        setData(response.data)
        console.log(response)
        console.log(response.data[0]._id)
        localStorage.setItem('groupID',response.data._id[0])
        
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  //End

  //Supervisour
  const [sdata, setSData] = useState([])

  const loadSData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/supervisour/${name}`)
      .then(function (response) {
        setSData(response.data)
        console.log(response.data[0]._id)
        // localStorage.setItem('gid',response.data.gid)
        localStorage.setItem('groupID',response.data._id[0])
     
        
      })
  }

  useEffect(() => {
    loadSData()
  }, [])
  //End

  //Admin
  //End

  //Student
  //End
  return (
    <>
      <NavBar />
      <div className='container'>
        {localStorage.getItem('userP') == 'Panel Member' ? (
          <>
            <h1>HI Panel Member</h1>
            <card>
              {data.map((group) => {
                return (
                  <>
                    <h2>Group ID:{group.gid}</h2>
                    
                    <NavLink
                      to={`/viewMarking/${group.gid}`}
                      className='btn btn-outline-dark me-2'
                    >
                      View
                    </NavLink>
                  </>
                )
              })}
            </card>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
            <h1>Hi Supervisor</h1>
            <card>
              {sdata.map((group) => {
                return (
                  <>
                    <h2>Group ID:{group.gid}</h2>
                  
                    <NavLink
                      to={`/viewMarking/${group.gid}`}
                      className='btn btn-outline-dark me-2'
                    >
                      View
                    </NavLink>
                  </>
                )
              })}
            </card>
          </>
        ) : localStorage.getItem('userP') == 'Admin' ? (
          <>
            <h1>Hi Admin</h1>
          </>
        ) : localStorage.getItem('userP') == 'Student' ? (
          <>
            <h1>HI Student</h1>
          </>
        ) : (
          <p>not found:{localStorage.getItem('userP')}</p>
        )}
      </div>
    </>
  )
}
