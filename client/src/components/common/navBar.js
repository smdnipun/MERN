import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export default function NavBar() {
  const drawerWidth = 240

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
      <div bg='light' variant='grey'>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position='fixed'
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          ></AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant='permanent'
            anchor='left'
          >
            <Toolbar />
            {localStorage.getItem('userP') == 'Panel Member' ? (
              <>
                <ListItemButton eventKey=''>Evaluvate topics</ListItemButton>
                <ListItemButton eventKey=''>
                  Evaluvate presentation
                </ListItemButton>
              </>
            ) : localStorage.getItem('userP') == 'Supervisor' ? (
              <>
                <ListItemButton href=''>Evaluvate Document</ListItemButton>
                <ListItemButton to='/acceptTopic'>Accept Topics</ListItemButton>
                <ListItemButton eventKey=''>Student Gropus</ListItemButton>
              </>
            ) : localStorage.getItem('userP') == 'co-supervisor' ? (
              <>
                <ListItemButton href=''>Evaluvate Document</ListItemButton>
                <ListItemButton to='/coSupAcceptTopic'>
                  Accept Group
                </ListItemButton>
                <ListItemButton eventKey=''>Student Gropus</ListItemButton>
              </>
            ) : localStorage.getItem('userP') == 'Admin' ? (
              <>
                <ListItemButton href=''>Create Panel</ListItemButton>
                <ListItemButton eventKey='/sMarking'>
                  Create MarkingScehme
                </ListItemButton>
                <ListItemButton eventKey=''>View Marks</ListItemButton>
                <ListItemButton to='/addfiles'>Add Reseach </ListItemButton>
                <ListItemButton to='/userlist'>Manage Users</ListItemButton>
                <ListItemButton to='/grplist'>Manage Groups</ListItemButton>
                
              </>
            ) : localStorage.getItem('userP') == 'Student' ? (
              <>
                <ListItemButton to=''>Documents</ListItemButton>
                <ListItemButton to='/reqCo'>Request Supervisor</ListItemButton>
                <ListItemButton to='/topic'>Research </ListItemButton>
                <ListItemButton to='/paneltopic'>top </ListItemButton>
              </>
            ) : (
              <p>not found:{localStorage.getItem('userP')}</p>
            )}
          </Drawer>
        </Box>
        <Toolbar />
      </div>
    </div>
  )
}
