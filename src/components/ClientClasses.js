import React, { useState, useEffect } from 'react';
import Classes from './Classes';

const ClientClasses = () => {
  const [ classes, setClasses ] = useState([]);

  useEffect(()=>{
    //axios set classes
  }, []);

  return (
  <div>
    <Classes classes={classes}/>
  </div>
  );
}

export default ClientClasses;