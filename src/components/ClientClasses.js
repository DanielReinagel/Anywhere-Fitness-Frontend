import React, { useState, useEffect } from 'react';
import Classes from './Classes';
import axiosWithAuth from '../functions/axiosWithAuth';

const ClientClasses = () => {
  const [ classes, setClasses ] = useState([]);

  const user_id = localStorage.getItem('user_id');

  useEffect(()=>{
    if(user_id){
      axiosWithAuth().get(`https://anywherefitnessbuild.herokuapp.com/api/users/${user_id}/classes`)
        .then(resp => setClasses(resp.data))
        .catch(err => console.log(err, err.response));
    } else {
      console.log('User ID Not Found in localStorage')
    }
  }, []);

  return (
  <div>
    <h2>The classes you are attending</h2>
    <Classes classes={classes}/>
  </div>
  );
}

export default ClientClasses;