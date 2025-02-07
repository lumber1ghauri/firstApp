import React , {useState} from 'react';
function Goal({ goal, onDelete }) {
    return (
      <li>
        {goal.title}
        <button onClick={onDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </li>
    );
  }
  export default Goal;
  