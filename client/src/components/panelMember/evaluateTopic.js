import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import NavBar from '../common/navBar'


export default function EvaluateTopice() {

  

  const [data, setData] = useState([])
  const [gdata, setGdata] = useState('')
  const [topic, setTopic] = useState('')
  const panelMember = localStorage.getItem('userN')

  const theme = createTheme()


  const check = () => {
    axios
      .post('http://localhost:5000/group/pCheck', {
        panelMember:panelMember,
      })
      .then((res) => {
        setGdata(res.data)
        console.log(res.data[0].gid)

        const gid = res.data[0].gid

        axios
          .get(`http://localhost:5000/topic/searchBygid/${gid}`)
          .then((res) => {
            setData(res.data)
            console.log(res.data[0])
          })
      })
  }

  


  useEffect(() => {
    check()
  }, [])

  return (
    <div>
      <NavBar />
      <div className='container'>
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component='h1' variant='h5'>
                Topic Accept or Reject
              </Typography>
              <Box component='form' noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {data.map((topic) => {
                    return (
                      <>
                        <Grid item xs={12}>
                          <TextField
                            id='filled-read-only-input'
                            label='Group ID'
                            defaultValue={topic.gid}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant='filled'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id='filled-read-only-input'
                            label='Topic'
                            defaultValue={topic.topic}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant='filled'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              display: 'flex',
                              typography: 'body1',
                              '& > :not(style) + :not(style)': {
                                ml: 5,
                              },
                            }}
                          ></Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            href={topic.link}
                            label='Document'
                            underline='none'
                          >
                            Document
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <TextareaAutosize
                            maxRows={4}
                            aria-label='maximum height'
                            placeholder='Feedback'
                            style={{ width: 200 }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Stack direction='row' spacing={2}>
                            <Button variant='contained' color='success'>
                              Accept
                            </Button>
                            <Button variant='contained' color='error'>
                              Reject
                            </Button>
                          </Stack>
                        </Grid>
                      </>
                    )
                  })}
                </Grid>
               
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  )
}
