import React, { useState } from 'react'

function Habit() {
    const [completionStatus, setCompletion] = useState('incomplete');

    return (
      <div>
        <p>Habit Name</p>
        <p>Habit Status: {completionStatus}</p>
        <button onClick={(e) => {
          e.preventDefault()
          setCompletion(completionStatus === 'incomplete' ? 'complete' : 'incomplete')}}>Mark {completionStatus === 'incomplete' ? 'complete' : 'incomplete' }</button>
      </div>
    );
  }
  
  export default Habit;