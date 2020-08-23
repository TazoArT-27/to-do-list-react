import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './List.css'
const List = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
      setLine(true)
    }
    return (
     
    <div className="todo_style"> 
    <span onClick={cutIt}>
    <DeleteIcon className="deleteIcon"/>
    </span>    
        <li style={{textDecoration: line ?  "line-through" : "none"}}>{props.list}</li>
    </div>
    );
};

export default List;