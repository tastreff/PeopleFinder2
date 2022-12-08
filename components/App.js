import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './SignIn.js';
import Signup from './SignUp.js';
import Home from './Home.js';
import Webpage from './Webpage.js';
import { auth } from '../firebase'

function App() {
  const [currentUser, setCurrentUser] = useState()
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user))
    return unsubscribe
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Webpage />} />
        <Route path='/sign-in' element={currentUser ? <Home /> : <Login />} />
        <Route path='/sign-up' element={currentUser ? <Home /> : <Signup />} />
        <Route path='/home' element ={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;


//<Route path='/' element={currentUser ? <Home /> : <Login />} />