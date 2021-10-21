import React from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

const LogInPage = ({refreshRole}) => {
  return (
    <div>
      <LogInForm refreshRole={refreshRole}/>
      <SignUpForm refreshRole={refreshRole}/>
    </div>
  );
}

export default LogInPage;