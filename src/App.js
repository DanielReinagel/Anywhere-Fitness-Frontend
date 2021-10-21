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

function App() {
  const [date, setDate] = useState(null);

  const role = localStorage.getItem("role_id");

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  console.log(role);
  return (
    <>
      <div>
        {!role && <Link to="/login">Log In or Sign Up</Link>}
        {role && <Link to="/home">Home</Link>}
        {role==='1' && (
          <Link to="/instructorclasses">Classes I am Teaching</Link>
        )}
        {role==='2' && <Link to="/classes">All Classes</Link>}
        {role==='2' && <Link to="/clientclasses">Classes I am Attending</Link>}
        {role==='1' && <button>Be a Client</button>}
      </div>
      <div>
        <Switch>
          <PrivateRoute go={!role} path="/login">
            <LogInPage />
          </PrivateRoute>
          <PrivateRoute go={!!role} path="/home">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute go={role==='1'} path="/instructorclasses">
            <InstructorClasses />
          </PrivateRoute>
          <PrivateRoute go={role==='2'} path="/classes">
            <AllClasses />
          </PrivateRoute>
          <PrivateRoute go={role} path="/class/:id">
            <ClassPage />
          </PrivateRoute>
          <PrivateRoute go={role==='2'} path="/clientclasses">
            <ClientClasses />
          </PrivateRoute>
          <Route path="/">
            {role ? <HomePage /> : <LogInPage />}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;