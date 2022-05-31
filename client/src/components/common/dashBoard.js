import React from 'react'
import NavBar from './navBar'

export default function DashBoard(){


    return(
        <>
        <NavBar/>
        <div className='container'>

{localStorage.getItem('userP') == 'Panel Member' ? (
          <>
          <h1>HI Panel Member</h1>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
          <h1>Hi Supervisor</h1>
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