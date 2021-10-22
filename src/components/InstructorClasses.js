import React, { useState, useEffect } from 'react';
import Classes from './Classes';



// InstructorClasses pulls specific instructor classes and their info from DB
// "get" request & with correct endpoint (READme File)



const InstructorClasses = () => {
  const [ classes, setClasses ] = useState([]);

  useEffect(()=>{
    //axios set classes
  }, []);

  return (
  <div>
    <h2>Classes you are teaching</h2>
    <Classes classes={classes}/>
  </div>
  );
}

export default InstructorClasses;