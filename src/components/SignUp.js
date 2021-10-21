import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <>
            <h1>Sign Up!</h1>
            <span>
                Already have an account?
                <Link to='/login'> Log In</Link>
            </span>
            <br />
            <span>Go back <Link to='/'>Home</Link></span>
        </>
    );
}

export default SignUpPage;