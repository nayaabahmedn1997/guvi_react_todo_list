import React, { useState } from 'react'
import '../styles/todoCard.css';



export const TodoCard = ({ id, name, description, status, todoData, setTodoData }) => {
    const [isCardEditable, setCardEditable] = useState(false);
    const [editButtonStatus, setEditButtonStatus] = useState("Edit");
    const [todoStatus, setTodoStatus] = useState(status);


    const editTodo = () => {
        
        if (editButtonStatus == "Edit") {
            setEditButtonStatus(editButtonStatus === "Edit" ? "Save" : "Edit");
            setCardEditable(true);
        }
        else {
            setEditButtonStatus(editButtonStatus === "Save" ? "Edit" : "Save");
            const newTodoStatus = {
                name,
                description,
                status: todoStatus
            };
            const tempData = [...todoData]
            const todo = tempData.find(u => u.id === id);
            if (todo) {
                Object.assign(todo, newTodoStatus);
                setTodoData([...tempData]);
            } else {
                console.log('User not found');
            }
            setCardEditable(false);
            
        }

    }

    const deleteTodo = () => {
        const data = [...todoData]
        setTodoData([...data.filter((todo)=>todo.id !== id)]);
    }
    return (
        <div className="col card-main  col-xs-12 col-sm-6 col-md-4 ">

            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Description: {description}</p>
                    <label htmlFor="todo-select">
                        Status:
                        <select value={status} disabled={!isCardEditable}
                            id='todo-select'
                            onChange={(e) => setTodoStatus(e.target.value)}
                            className={todoStatus === "NOT_COMPLETED" ? "not-completed" : "completed"}
                        >
                            <option value="NOT_COMPLETED">NOT_COMPLETED</option>
                            <option value="COMPLETED">COMPLETED</option>
                        </select>
                    </label>
                    <div className="button-container">
                        <button className="edit-button btn btn-info"
                            onClick={
                                editTodo
                            }
                        >{editButtonStatus}</button>
                        <button className="delete-button btn btn-danger"
                            onClick={deleteTodo}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
