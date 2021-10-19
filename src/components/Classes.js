import React from 'react';
import ClassCard from './ClassCard';

const Classes = ({classes}) => {
  return (
    <div>
      {classes.map(classObj => <ClassCard classObj={classObj}/>)}
    </div>
    );
}

export default Classes;