import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Login() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const paperStyle={
    padding: '20px', 
    margin: '20px auto', 
    height: '70vh', 
    width: '70vh', 
    backgroundColor: '#F5E6FC'
  }
  
  async function handleSubmit(e) {
    const email = e.target.elements[0].value
    const password = e.target.elements[1].value

    e.preventDefault()
    try {
      auth.signInWithEmailAndPassword(email, password).then(() => navigate('/home'))
    } catch (error) {
      setError('Failed to sign in:', error.message)
    }
    setError(null)
    setLoading(false)
  }

  return (
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <h2>Sign-in Form</h2>
        <form onSubmit={handleSubmit}>
          <TextField 
            name='email'
            margin='normal' required fullWidth
            variant='filled' label='Email Address' placeholder='Enter email'>
          </TextField>
          <TextField 
            name='password'
            margin='normal' required fullWidth
            variant='filled' type='password' label='Password' placeholder='Enter password'>
          </TextField>
          <p>{error ? error : ''}</p>
          <Button margin='none' fullWidth variant='contained' type='submit' disabled={loading}>
            Sign In
          </Button> 
        </form>
        <Typography align='left'> 
          <Button variant='text' href='/sign-up'>
            Sign up for an account 
          </Button>
        </Typography>        
      </Paper>  
    </Grid>
  )
}