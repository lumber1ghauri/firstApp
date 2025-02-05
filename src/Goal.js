import React , {useState} from 'react';
function Goal ({title , onDelete})
{
    return <li>
    {title}
    <button onClick={onDelete} style={{marginLeft: "10px" , cursor: "pointer"}}>Delete</button>
    </li>;
}
export default Goal;