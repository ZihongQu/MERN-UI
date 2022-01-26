import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Routes , Route } from 'react-router-dom';
import useStyles from './styles.js';
import { getPost } from './actions/posts';

import Navbar from './components/Navbar/Navbar.js'; 
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar></Navbar>
        <Routes >
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/auth' exact element={<Auth/>}></Route>
        </Routes >
      </Container>
    </BrowserRouter>
  );
}

export default App;
