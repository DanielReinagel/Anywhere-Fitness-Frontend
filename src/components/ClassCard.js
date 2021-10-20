import React from 'react';

const ClassCard = ({classObj}) => {
  return (
    <div>
      <h2>{classObj.name}</h2>
      <h6>run by {classObj.instructor}</h6>
      <p>at {classObj.time}</p>
      <p>for {classObj.duration}</p>
      <p>They will be doing {classObj.type}</p>
    </div>
  );
}

export default ClassCard;