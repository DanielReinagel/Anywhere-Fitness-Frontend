import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [date, setDate] = useState(null);

  const instructor, client = false; //TEMP CODE, PLEASE DELETE

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
      {!instructor&&!client && <Link to='/login'>Log In or Sign Up</Link>}
      {instructor||client && <Link to='/home'>Home</Link>}
      {instructor && <Link to='/instructorclasses'>Classes I am Teaching</Link>}
      {client && <Link to='/classes'>All Classes</Link>}
      {client && <Link to='/clientclasses'>Classes I am Attending</Link>}
      {instructor && <button>Be a Client</button>}
    </div>

  );
}

export default App;
