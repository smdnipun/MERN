import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


export default function Updateusers() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')
  const [specialization, setSpecialization] = useState('')

  let params= useParams();

  const Update = (e) => {
    e.preventDefault();
  axios.post(`http://localhost:5000/user/update/${params._id}`, {
    name,position,email,phone,address,id,specialization
})
navigate("/userlist");

}


const loadData = () => {
  axios.get(`http://localhost:5000/user/u/${params._id}`).then(function (response) {
    console.log(response.data)
    const data= response.data;
    setName(data.name);
    setEmail(data.email);
    setPosition(data.position);
    setPhone(data.phone);
    setAddress(data.address);
    setId(data.id);
    setSpecialization(data.specialization);

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
    <center> <h3 className='navi'>Update User</h3></center>  

      <div className = 'bod' style={{ maxWidth: 800, margin: "auto" }}>
      <center>
      <div className=' form'>
      <form onSubmit={Update}>

              <div className='form-group'>
              <label>Name</label>
              <input className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
              <br></br>
              </div>

              <div className='form-group'>
              <label>Position</label>
              <select
                class='form-select'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option>Student</option>
                <option>Supervisor</option>
                <option>panelMember</option>
              </select>
              </div>
              <br></br>

              <div className='form-group'>
              <label>Email</label>
              <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              <br></br>
              </div>

              <div className='form-group'>
              <label>Phone</label>
              <input className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
              <br></br>
              </div>

              <div className='form-group'>
              <label>Address</label>
              <input className='form-control' value={address}  onChange={(e) => setAddress(e.target.value)} />
              <br></br>
              </div>

              <div className='form-group'>
              <label>User ID</label>
              <input className='form-control' value={id}  onChange={(e) => setId(e.target.value)} />
              <br></br>
              </div>

              <div className='form-group'>
              <label>Specialization</label>
              <select
                class='form-select'
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option>Software Engineering</option>
                <option>Data Science</option>
                <option>Cyber Security</option>
                <option>Information Technology</option>
              </select>
            </div>
            <br></br>


        <button  className='btn btn-primary'  type='submit'>Update</button>
      </form>
      </div>
      </center>
      </div>

    </div>
        
    )
}
