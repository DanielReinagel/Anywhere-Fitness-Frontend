import React from 'react';
import { Link } from 'react-router-dom';

const LogInPage = () => {
  return (
    <>
      <h1>Login Page!</h1>
      <span>
        Don't have an account?
        <Link to='/signup'> Sign Up</Link>
      </span>
      <br />
      <span>Go back<Link to='/'> Home</Link></span>
    </>
  );
}

export default LogInPage;