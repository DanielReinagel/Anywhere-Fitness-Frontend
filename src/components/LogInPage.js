import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from '../style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const LogInPage = () => {
  return (
    <EntryPage>
      <PageHeader to='/'>ANYWHERE FITNESS</PageHeader>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor='login-email'>Email Address</label>
            <Input type='text' placeholder='Email' id='login-email' />
          </InputGroup>
          <InputGroup>
            <label htmlFor='login-password'>Password</label>
            <Input type='password' placeholder='Password' id='login-password' />
          </InputGroup>
          <Button type='submit' full>Log In</Button>
        </form>
        <span>
          Don't have an account?
          <Link to='/signup'>Sign Up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default LogInPage;