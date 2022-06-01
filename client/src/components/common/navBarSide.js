import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

export default function NavBarSide() {
  return (
    <div>
      <Navbar>
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
              <Nav.Link eventKey=''>Templates</Nav.Link>
              <Nav.Link href=''>Document Submission</Nav.Link>
            </>
          ) : (
            <p>not found:{localStorage.getItem('userP')}</p>
          )}
        </Nav>
      </Navbar>
    </div>
  )
}
