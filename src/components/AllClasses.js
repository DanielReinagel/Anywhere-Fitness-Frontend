import React, { useState, useEffect } from 'react';
import Classes from './Classes';
import axiosWithAuth from '../functions/axiosWithAuth';

const AllClasses = () => {
  const [ classes, setClasses ] = useState([]);


  useEffect(()=>{
    axiosWithAuth().get('https://anywherefitnessbuild.herokuapp.com/api/classes')
      .then(resp => setClasses(resp.data))
      .catch(err => console.log(err));
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