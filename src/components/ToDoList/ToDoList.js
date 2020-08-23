import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoList.css';
import List from '../List/List';


const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    }
    const listOfItem = () => {
        setNewItem((prevValue)=>{
            return [...prevValue, item];
        })
    setItem("");

    }
    return (
        <div className = "main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" value={item} onChange={itemEvent} placeholder= " Add an item.."/>
                <Button onClick={listOfItem}>
                    <AddIcon></AddIcon>
                </Button>
                <br/>
                <ul>
                    
                    {newItem.map((element, index)=> {
                       return <List key={index} list={element}></List>
                    } )}
                </ul>
                <br/>
            </div>
            
        </div>
    );
};

export default ToDoList;