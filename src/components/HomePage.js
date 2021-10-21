import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link style={{marginRight: '8px'}} to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
    </>
  );
}

export default HomePage;