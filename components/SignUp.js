import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Signup() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    const email = e.target.elements[2].value
    const password = e.target.elements[3].value
    
    e.preventDefault()
    try {
      setError('')
      auth.createUserWithEmailAndPassword(email, password).then(() => <Navigate to='/home' />)
    } catch {
      setError('Failed to create account.')
    }
    setLoading(false)
  }

  const paperStyle={
    padding: '20px', 
    margin: '20px auto', 
    height: '70vh', 
    width: '70vh', 
    backgroundColor: '#F5E6FC'
  }
    
  return (
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <h2>Sign-up Form</h2>
        {/* //name field  */}
        <form onSubmit={handleSubmit}>
          <Grid>
              <Box 
              sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                  <TextField 
                      margin='normal' required size='small' 
                      variant='filled' label='First Name'> 
                  </TextField>
                  <TextField 
                      margin='normal' size='small' 
                      variant='filled' label='Last Name'> 
                  </TextField>
              </Box>
          </Grid>
          {/* email and password */}
          <TextField 
            margin='normal' required fullWidth
            variant='filled' label='Email Address' placeholder='Enter email' name='email'>
          </TextField>
          <TextField 
            margin='normal' required fullWidth
            variant='filled' type='password' label='Password' placeholder='Enter password' name='password'>
          </TextField>
          <Typography>{error ? error : ''}</Typography>
          <Button margin='normal' fullWidth variant='contained' type='submit' disabled={loading}>
            Sign up
          </Button> 
        </form>
        <Typography align='left'> 
          <Button variant='text' href='/sign-in'>
            Sign into your account 
          </Button>
        </Typography>      
      </Paper>  
    </Grid>
  )
}