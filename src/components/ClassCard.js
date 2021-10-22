import React from 'react';
import axios from 'axios';
// ClassCard pulls classes and their info from DB
// "get" request & with correct endpoint (READme File)
// This component is then passed into classes to be displayed

useEffect(() => {
  const showCards = () => {
axios.get('https://anywherefitnessbuild.herokuapp.com/api/classes')
      .then(res => {
        showCards(res.data)
      })
  }
  return () => {
    cleanup
  }
}, [input])



const ClassCard = ({classObj}) => {
  return (
    <div>
      <h2>{classObj.name}</h2>
      {/* <h6>run by {classObj.instructor}</h6> */}
      <p>at {classObj.time}</p>
      <p>for {classObj.duration}</p>
      <p>They will be doing {classObj.type}</p>
    </div>
  );
}

export default ClassCard;