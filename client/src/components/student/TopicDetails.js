import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


export default function TopicDetails() {
  let email = localStorage.getItem('user')

  const [topic, setTopic] = useState({})
  const [group, setGroup] = useState([])



  const loadData = () => {
    axios
      .post('http://localhost:5000/group/check', {
        email: email,
      })
      .then((response) => {
        setGroup(response.data[0])
        const gid = response.data[0].gid
        // const gid = response.data[0]
        console.log(gid)
        axios
          .get(`http://localhost:5000/topic/searchBygid/${gid}`)
          .then((response) => {
            setTopic(response.data[0])
          })
          .catch(function (error) {
            console.log(error)
          })
      })
      .catch(function (error) {
        console.log(error)
      })
    }

  useEffect(() => {
    loadData()
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

     <button className='btn btn-primary'><Link to ={"/regtop"}>Register New Topic</Link></button>


      <center>
        <h3 className='navi'>Registered Topics</h3>
        <br></br>
        <table class='table' style={{ marginTop: 50, width: 700 }}>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Specialization</th>
              <th>Status</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              

                            <td>{topic.topic}</td>
                            <td>{topic.specialization}</td>
                            <td>{topic.status}</td>
                            <td>{topic.link}</td>
                            <td> <Link to={`/panaltopic/${topic._id}`}>
                            <button className='btn btn-primary'>update</button>
                            </Link></td>
             </tr>                          
              
          </tbody>
        </table>
      </center>
    </div>
  )
}
