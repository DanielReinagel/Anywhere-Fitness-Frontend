import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import InstructorClasses from "./components/InstructorClasses";
import AllClasses from "./components/AllClasses";
import ClassPage from "./components/ClassPage";
import ClientClasses from "./components/ClientClasses";
import SignUpPage from "./components/SignUp";

function App() {
  const [date, setDate] = useState(null);

  const instructor = false; //TEMP CODE, PLEASE DELETE
  const client = false; //TEMP CODE, PLEASE DELETE

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <>
      <div style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')`
      }}></div>
      <div>
        {/* {!instructor && !client && <Link to="/login">Log In or Sign Up</Link>} */}
        {instructor || (client && <Link to="/home">Home</Link>)}
        {instructor && (
          <Link to="/instructorclasses">Classes I am Teaching</Link>
        )}
        {client && <Link to="/classes">All Classes</Link>}
        {client && <Link to="/clientclasses">Classes I am Attending</Link>}
        {instructor && <button>Be a Client</button>}
      </div>
      <div>
        <Switch>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <LogInPage />
          </PrivateRoute>
          <PrivateRoute path="/signup">
            <SignUpPage />
          </PrivateRoute>
          <PrivateRoute path="/instructorclasses">
            <InstructorClasses />
          </PrivateRoute>
          <PrivateRoute path="/classes">
            <AllClasses />
          </PrivateRoute>
          <PrivateRoute path="/class/:id">
            <ClassPage />
          </PrivateRoute>
          <PrivateRoute path="/clientclasses">
            <ClientClasses />
          </PrivateRoute>
          <Route path="/">
            {instructor || client ? <HomePage /> : <LogInPage />}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
