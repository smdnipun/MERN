import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href=''>RPMT</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href=''>Contact</Nav.Link>
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
      <Nav defaultActiveKey='' className='flex-column'>
        {localStorage.getItem('userP') == 'Panel Member' ? (
          <>
            <Nav.Link eventKey=''>Evaluvate topics</Nav.Link>
            <Nav.Link eventKey=''>Evaluvate presentation</Nav.Link>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
            <Nav.Link href=''>Evaluvate Document</Nav.Link>
            <NavLink to='/acceptTopic'>Accept Topics</NavLink>
            <Nav.Link eventKey=''>Student Gropus</Nav.Link>
          </>
        ) : localStorage.getItem('userP') == 'co-supervisor' ? (
          <>
            <Nav.Link href=''>Evaluvate Document</Nav.Link>
            <NavLink to='/'>Accept Group</NavLink>
            <Nav.Link eventKey=''>Student Gropus</Nav.Link>
          </>
        ) : localStorage.getItem('userP') == 'Admin' ? (
          <>
            <Nav.Link href=''>Create Panel</Nav.Link>
            <Nav.Link eventKey='/sMarking'>Create MarkingScehme</Nav.Link>
            <Nav.Link eventKey=''>View Marks</Nav.Link>
          </>
        ) : localStorage.getItem('userP') == 'Student' ? (
          <>
            <Nav.Link href=''>Group</Nav.Link>
            <Nav.Link eventKey=''>Documents</Nav.Link>
            <NavLink to='/reqCo'>Request Supervisor</NavLink>
            <Nav.Link href=''>Document Submission</Nav.Link>
          </>
        ) : (
          <p>not found:{localStorage.getItem('userP')}</p>
        )}
      </Nav>
    </div>
  )
}
