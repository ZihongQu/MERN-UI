import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Routes , Route, Navigate  } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js'; 
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import PostDetail from './components/PostDetail/PostDetail.js';

function App() {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Navbar></Navbar>
        <Routes >
          <Route path='/' exact element={<Navigate  to='/posts'/>}></Route>
          <Route path='/posts' exact element={<Home/>}></Route>
          <Route path='/posts/search' exact element={<Home/>}></Route>
          <Route path='/posts/:id' exact element={<PostDetail/>}></Route>
          // if user already signed in, redirect sign in url to home page
          <Route path='/auth' exact element={user ? <Navigate to='/posts'/> : <Auth/>}></Route>
        </Routes >
      </Container>
    </BrowserRouter>
  );
}

export default App;
