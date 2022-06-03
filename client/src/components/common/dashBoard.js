import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './navBar'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import { ListGroup } from 'react-bootstrap'
import Grid from '@mui/material/Grid'

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
       
      })
   
      //  axios
      //    .get(`http://localhost:5000/schedule/get/${id}`)
      //    .then(function (response) {
      //      setSchedule(response.data)
      //      console.log(response)
      //    })
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
        
        // localStorage.setItem('gid',response.data.gid)
       
      })
  }

  useEffect(() => {
    loadSData()
  }, [])
  //End

  //Admin
  //End

  //Student
  const [stData, setStData] = useState([])
  const [schedule,setSchedule]=useState()
  
 const loadStData = () => {
   let name = localStorage.getItem('userN')
   axios
     .get(`http://localhost:5000/group/student/${name}`)
     .then(function (response) {
       setStData(response.data)
      //  console.log(response.data)
       // localStorage.setItem('gid',response.data.gid)

          const id = response.data[0].gid
          
          axios
            .get(`http://localhost:5000/schedule/get/${id}`)
            .then(function (response) {
            setSchedule(response.data)
              console.log(response.data)
            })

     })
   
 }

 useEffect(() => {
   loadStData()
 
 }, [])
  //End
  return (
    <>
      <NavBar />

      <div className='container'>
        {localStorage.getItem('userP') == 'Panel Member' ? (
          <>
            <h1>HI Panel Member</h1>

            <Card sx={{ minWidth: 275 }}>
              {data.map((group) => {
                return (
                  <>
                    <dvi dvi className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Typography variant='h5' component='div'></Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        
                        </Typography>
                        <Typography variant='body2'>
                          <ListGroup>
                            <ListItem>{group.first}</ListItem>
                            <ListItem>{group.second}</ListItem>
                            <ListItem>{group.third}</ListItem>
                            <ListItem>{group.forth}</ListItem>
                          </ListGroup>
                          <br />
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <NavLink to={`/viewMarking/${group.gid}`}>
                          <button className='btn btn-dark'>View</button>
                        </NavLink>
                      </CardActions>
                    </dvi>
                  </>
                )
              })}
            </Card>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
            <h1>Hi Supervisor</h1>
            <Card sx={{ minWidth: 275 }}>
              {sdata.map((group) => {
                return (
                  <>
                    <div className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Typography variant='h5' component='div'></Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                          Co-Supervisor-{group.co_supervisor}
                        </Typography>
                        <Typography variant='body2'>
                          <ListGroup>
                            <ListItem>{group.first}</ListItem>
                            <ListItem>{group.second}</ListItem>
                            <ListItem>{group.third}</ListItem>
                            <ListItem>{group.forth}</ListItem>
                          </ListGroup>
                          <br />
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <NavLink to={`/viewMarking/${group.gid}`}>
                          <button className='btn btn-dark'>View</button>
                        </NavLink>
                      </CardActions>
                    </div>
                  </>
                )
              })}
            </Card>
          </>
        ) : localStorage.getItem('userP') == 'Admin' ? (
          <>
            <h1>Hi Admin</h1>
          </>
        ) : localStorage.getItem('userP') == 'Student' ? (
          <>
            <h1>HI Student</h1>
            <Card sx={{ minWidth: 275 }}>
              {stData.map((group) => {
                return (
                  <>
                    <div className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 30 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant='h5'
                              component='div'
                            ></Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                              Supervisor-{group.supervisor} <br />
                              <br />
                              <br />
                              Co-Supervisor-{group.co_supervisor} <br />
                              <br />
                              <br />
                              Panel Member-{group.panelMember}
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                              Group Members
                              <br />* {group.first}
                              <br />*{group.second}
                              <br />* {group.third}
                              <br />*{group.forth}
                              <br />
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </div>
                  </>
                )
              })}
            </Card>
          </>
        ) : (
          <p>not found:{localStorage.getItem('userP')}</p>
        )}
      </div>
    </>
  )
}
