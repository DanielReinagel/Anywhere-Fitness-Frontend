import React, { useState, useEffect } from 'react';
import Classes from './Classes';

const AllClasses = () => {
  const [ classes, setClasses ] = useState([]);


  useEffect(()=>{
    //axios set classes
  }, []);

  return (
  <div>
    <h2>Classes</h2>
    <input type='text' id='searchbar' placeholder='search'/>
    <Classes classes={classes}/>
  </div>
  );
}

export default AllClasses;