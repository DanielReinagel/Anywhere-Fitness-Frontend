import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

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
    <div>
      {!instructor&&!client && <a>Log In or Sign Up</a>}
      {instructor||client && <a>Home</a>}
      {instructor && <a>Classes I am Teaching</a>}
      {client && <a>All Classes</a>}
      {client && <a>Classes I am Attending</a>}
      {instructor && <button>Be a Client</button>}
    </div>

  );
}

export default App;
