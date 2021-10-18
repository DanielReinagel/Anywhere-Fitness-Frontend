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
      {!instructor&&!client && <Link>Log In or Sign Up</Link>}
      {instructor||client && <Link>Home</Link>}
      {instructor && <Link>Classes I am Teaching</Link>}
      {client && <Link>All Classes</Link>}
      {client && <Link>Classes I am Attending</Link>}
      {instructor && <button>Be a Client</button>}
    </div>

  );
}

export default App;
