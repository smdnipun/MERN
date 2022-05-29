import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function NavBar(){

    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="">Features</Nav.Link>
      <Nav.Link href="">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav> 
      <Nav.Link href="#">More deets</Nav.Link>
      {
            localStorage.getItem('user') != null ? (
              <>
                <a href='/logout' className='btn btn-outline-dark'>
                  <i className='fa fa-sign-in me-1'></i> Logout
                </a>
              </>
            ):(
              <>
              <p>no user</p>
              </>
            )}
      <Nav.Link eventKey={2} href="">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Nav defaultActiveKey="" className="flex-column">
  {localStorage.getItem('userP')=='Panel Member' ? (
  <>
   <Nav.Link href="/">Active</Nav.Link>
  <Nav.Link eventKey="">Evaluvate topics</Nav.Link>
  <Nav.Link eventKey="">Evaluvate presentation</Nav.Link>
  </>
  ): localStorage.getItem('userP')=='Supervisor' ?(
  <>
  
   <Nav.Link href="">Evaluvate Document</Nav.Link>
  <Nav.Link eventKey="">Accept Topics</Nav.Link>
  <Nav.Link eventKey="">Student Gropus</Nav.Link>
  
  </>
 ) :(

    <p>not found:{localStorage.getItem('userP')}</p>

  )
  
  }
</Nav>
        </div>
    )
  
}