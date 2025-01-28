import { useState } from 'react'

function Habit() {
    const [completionStatus, setCompletion] = useState(false);

    return (
      <div>
        <p>Habit Name</p>
        <p>Habit Status: {completionStatus ? 'complete' : 'incomplete'}</p>
        <button onClick={(e) => {
          e.preventDefault()
          setCompletion(!completionStatus)}}>Mark {completionStatus ? 'incomplete' : 'complete' }</button>
      </div>
    );
  }
  
  export default Habit;