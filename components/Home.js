import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

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
        <h2 margin='normal'>Your Account</h2>
        <p margin='20px'>
          {auth.currentUser ? 'Username: ' + auth.currentUser.email : ''}
        </p>
        <Button margin='normal' variant='contained' onClick={() => 
          auth.signOut().then(() => navigate('/sign-in'))}>
          Sign Out
        </Button>
        <Button margin='normal' variant='contained' onClick={() => auth.signOut().then(() => navigate('/'))}>
          Home Page
        </Button>
        <Typography>
        </Typography>      
      </Paper>  
    </Grid>
  )
}