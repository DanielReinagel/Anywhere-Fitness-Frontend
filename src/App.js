import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LogInPage from './components/LogInPage';
import HomePage from './components/HomePage';
import InstructorClasses from './components/InstructorClasses';
import AllClasses from './components/AllClasses';
import ClassPage from './components/ClassPage';
import ClientClasses from './components/ClientClasses';

function App() {
  const [date, setDate] = useState(null);

  const instructor = false; //TEMP CODE, PLEASE DELETE
  const client = false; //TEMP CODE, PLEASE DELETE

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <>
      <div>
        {!instructor&&!client && <Link to='/login'>Log In or Sign Up</Link>}
        {instructor||client && <Link to='/home'>Home</Link>}
        {instructor && <Link to='/instructorclasses'>Classes I am Teaching</Link>}
        {client && <Link to='/classes'>All Classes</Link>}
        {client && <Link to='/clientclasses'>Classes I am Attending</Link>}
        {instructor && <button>Be a Client</button>}
      </div>
      <div>
        <Switch>
          <PrivateRoute path='/login'>
            <LogInPage/>
          </PrivateRoute>
          <PrivateRoute path='/home'>
            <HomePage/>
          </PrivateRoute>
          <PrivateRoute path='/instructorclasses'>
            <InstructorClasses/>
          </PrivateRoute>
          <PrivateRoute path='/classes'>
            <AllClasses/>
          </PrivateRoute>
          <PrivateRoute path='/class/:id'>
            <ClassPage/>
          </PrivateRoute>
          <PrivateRoute path='/clientclasses'>
            <ClientClasses/>
          </PrivateRoute>
          <Route path='/'>
            {instructor||client ? <HomePage/> : <LogInPage/>}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
