import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { BackgroundImage } from '../style';

const HomePage = () => {
  return (
    <Navbar>
      <Link style={{marginRight: '8px'}} to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </Navbar>
  );
}

export default HomePage;