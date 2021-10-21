import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from '../style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUpPage = () => {
    return (
        <EntryPage>
            <PageHeader to='/home'>ANYWHERE FITNESS</PageHeader>
            <EntryCard>
                <h2>Sign Up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor='signup-name'>Full Name</label>
                        <Input type='text' placeholder='Your Name' id='signup-name' />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor='signup-email'>Email Address</label>
                        <Input type='password' placeholder='Password' id='signup-password' />
                    </InputGroup>
                    <Button type='submit' full>Sign Up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to='/login'>Log In</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default SignUpPage;