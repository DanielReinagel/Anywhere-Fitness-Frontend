import React, { useState, useEffect } from 'react';
import Classes from './Classes';

const AllClasses = () => {
  const [ classes, setClasses ] = useState([]);


  useEffect(()=>{
    //axios set classes
  }, []);

  return (
  <div>
    <input type='text' id='searchbar'/>
    <Classes classes={classes}/>
  </div>
  );
}

export default AllClasses;