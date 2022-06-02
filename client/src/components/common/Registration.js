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
import { Select } from '@mui/material'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Registration() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

  var Group = {
    name,
    position,
    email,
    phone,
    address,
    id,
    specialization,
    password,
    rpassword,
  }

  const passtouser = async () => {
    try {
      const resp = await axios.post('/user/add', Group)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  console.log(Group.position)

  const theme = createTheme()
  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <center><label>Position</label></center>
                <select
                  class='form-select'
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value='Student'>Student</option>
                  <option value='Supervisor'>Supervisor</option>
                  <option value='Panel Member'>Panel Member</option>
                  <option value='Admin'>Admin</option>
                </select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='phone no'
                  label='Phone Number'
                  name='phone'
                  autoComplete='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='address'
                  label='Address'
                  name='address'
                  autoComplete='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='userId'
                  label='User ID Number'
                  name='id'
                  autoComplete='uid'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
             <center> <label>Specialization</label></center>
                <select
                  class='form-select'
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value='Software Engineering'>
                    Software Engineering
                  </option>
                  <option value='Data Science'>Data Science</option>
                  <option value='Cyber Security'>Cyber Security</option>
                  <option value='Information Technology'>
                    Information Technology
                  </option>
                </select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={rpassword}
                  onChange={(e) => setRpassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              onClick={passtouser}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
