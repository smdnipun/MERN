import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


export default function Viewgroups() {
  const [users, setUsers] = useState([])


  // This method fetches the records from the database.
  useEffect(() => {
    axios.get('/user').then((response) => {
      setUsers(response.data)
    })
  }, [])

// This method fetches the records from the database.
useEffect(() => {
  axios.get('/user')
      .then((response) => {
          setUsers(response.data);
      })
}, [])



  // This following section will display the table with the records of individuals.
  return (
    <div>
       <Navbar collapseOnSelect expand='lg' bg='light' variant='grey'>
        <Container>
          <Navbar.Brand href='/dashBoard'>RPMT</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href=''>About us</Nav.Link>
            </Nav>
            <Nav>
              <div>
                <p>{localStorage.getItem('userI')}</p>
                <p>{localStorage.getItem('userN')}</p>
              </div>
            </Nav>

            <Nav>
              {localStorage.getItem('user') != null ? (
                <>
                  <a href='/logout' className='btn btn-outline-dark'>
                    <i className='fa fa-sign-in me-1'></i> Logout
                  </a>
                </>
              ) : (
                <>
                  <p>no user</p>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <center>
        <h3 className='navi'>Registered Users</h3>
        <br></br>
        <table class='table' style={{ marginTop: 50, width: 700 }}>
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
                             <td> <Link to={`/edituser/${g._id}`}>
                        <button>update</button>
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
