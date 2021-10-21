import React, { useState, useEffect } from 'react';
import Classes from './Classes';
import axiosWithAuth from '../functions/axiosWithAuth';

const AllClasses = () => {
  const [ classes, setClasses ] = useState([]);
  const [ filteredClasses, setFilteredClasses ] = useState([]);
  const [ filter, setFilter ] = useState('');

  const onChange = event => {
    setFilter(event.target.value);
  }

  useEffect(()=>{
    axiosWithAuth().get('https://anywherefitnessbuild.herokuapp.com/api/classes')
      .then(resp => {setClasses(resp.data); setFilteredClasses(resp.data);})
      .catch(err => console.log(err));
  }, []);

  useEffect(()=>{
    setFilteredClasses(classes.filter(classObj => {
      const regExp = new RegExp(filter);
      return (classObj.class_name.match(regExp) || classObj.start_time.match(regExp) || classObj.duration.match(regExp) || classObj.intensity_level.match(regExp) || classObj.location.match(regExp));
    }))
  }, [filter])

  return (
  <div>
    <h2>Classes</h2>
    <input type='text' id='searchbar' placeholder='search' value={filter} onChange={onChange}/>
    <Classes classes={filteredClasses}/>
  </div>
  );
}

export default AllClasses;