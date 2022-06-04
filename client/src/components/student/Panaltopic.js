import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export default function Panaltopic() {
  const [status, setStatus] = useState('')
  const [link, setLink] = useState('')

  let params = useParams()

  const Update = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/topic/updatel/${params._id}`, {
      link,
    })
  }
  console.log(params)

  const loadData = () => {
    axios
      .get(`http://localhost:5000/topic/u/${params._id}`)
      .then(function (response) {
        console.log(response.data)
        const data = response.data
        setStatus(data.status)
        setLink(data.link)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

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
        {' '}
        <h3 className='navi'>Update Topic</h3>
      </center>

      <div className='bod' style={{ maxWidth: 800, margin: 'auto' }}>
        <center>
          <div className=' form'>
            <form onSubmit={Update}>
              <div className='form-group'>
                <label>Link</label>
                <input
                  className='form-control'
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <br></br>
              </div>

              <button className='btn btn-primary' type='submit'>
                Update
              </button>
            </form>
          </div>
        </center>
      </div>
    </div>
  )
}
