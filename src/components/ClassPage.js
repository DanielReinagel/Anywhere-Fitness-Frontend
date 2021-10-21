import React from 'react';

const ClassPage = () => {
  const classObj = {
    name: '',
    instructor: '',
    type: '',
    time: '',
    duration: '',
    intensity: '',
    location: '',
    filled: 0,
    max: 0
  }; //TEMP CODE, PLEASE DELETE

  return (
    <div>
      <p>Name: {classObj.name}</p>
      <p>Instructor: {classObj.instructor}</p>
      <p>Type: {classObj.type}</p>
      <p>Time: {classObj.time}</p>
      <p>Duration: {classObj.duration}</p>
      <p>Intensity: {classObj.intensity}</p>
      <p>location: {classObj.location}</p>
      <p>Number of People signed up: {classObj.filled}</p>
      <p>Max Class Size: {classObj.max}</p>
    </div>
  );
}

export default ClassPage;