import React, { useEffect, useState } from 'react'
import '../styles/content.css'
import { TodoCard } from './TodoCard'


export const Content = () => {
    const data = [
        {
            id:0,
            name: 'Office Task-1',
            description: "this is the description of my task",
            status: "NOT_COMPLETED",
        },
        {
            id:1,
            name: 'Office Task-2',
            description: "this is the description of my  second task",
            status: "COMPLETED",
        },
        {
            id:2,
            name: 'Office Task-1',
            description: "this is the description of my  third task",
            status: "NOT_COMPLETED",
        },
    ]
    const addTodo = (event)=>{
        event.preventDefault();
        if(todoName && todoDescription)
        {
            const newTodo = {
                id: (todoData.length + 1),
                name:todoName,
                description:todoDescription,
                status:"NOT_COMPLETED"
            };
            setTodoData([...data, newTodo]);
        }
        else
        {

        }
        
    }

    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoData, setTodoData] = useState([...data]);
    const [todoFilter, setTodoFilter] = useState("ALL");
    const [filterColor, setFilterColor] =useState("All");

    useEffect(()=>{
        setTodoData(data);
        setTodoFilter("All");
    },[]);
    
    return (
        <div className="container">
            {/* Heading */}
            <h1 className="title text-center">My Todo</h1>
            {/* Add todo section */}
            <div className="add-todo-section">
                {/* Add to do form elemnent */}
                <div className="row w-100"
                
                >
                <form className="col-12  text-center"
                onSubmit={addTodo}
                >
                    
                        <input type="text" placeholder='Todo Name' id="Todo-Name" className='col-lg-4 c col-sm-12 todo-input' 
                            value= {todoName}
                            onChange={(e)=>setTodoName(e.target.value)}
                        />
                        <input type="text" placeholder='Todo Description'  id="Todo-Description" className='col-lg-4  col-sm-12 todo-input' 
                        value={todoDescription}
                        onChange = {(e)=>setTodoDescription(e.target.value)}
                        />
                        <button type="submit" className="btn col-lg-4 col-sm-12  todo-submit"
                        disabled={(!todoName && !todoDescription)}
                        >Submit</button>
                        

                   
                </form>
                </div>
                
            </div>
            {/* Todo Display section */}
            <div className="display-todo-section">
                <div className="container display-todo-section-content">
                    <h1 className="todo-data-heading">
                        My Todos
                    </h1>

                    <div className="todo-filter-section">
                        
                        <div className="todo-filter-selection">
                            <label htmlFor='filter-options'>
                                <span className='filter-heading-color'>Status Filter:</span>
                                <select  id="filter-options"
                                className={todoFilter==='All'?'all':todoFilter}
                                onChange={(e)=>setTodoFilter(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="NOT_COMPLETED">NOT_COMPLETED</option>
                                    <option value="COMPLETED">COMPLETED</option>

                                </select>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="container row">
                {console.log(todoData)}
                    {
                       
                       todoFilter==="All"?
                        todoData.map((todo)=>{
                           return  (<TodoCard 
                             key = {todo.id}
                             id = {todo.id}
                             name={todo.name}
                             description={todo.description}
                             status={todo.status}
                             todoData={
                                todoData
                             }
                             setTodoData={setTodoData}
                            />)
                        }):[...todoData].filter((todo)=>todo.status=== todoFilter).map(
                            (todo)=>{
                                return  (<TodoCard 
                                    key = {todo.id}
                                    id = {todo.id}
                                    name={todo.name}
                                    description={todo.description}
                                    status={todo.status}
                                    todoData={
                                       todoData
                                    }
                                    setTodoData={setTodoData}
                                   />)
                            }
                        )
                            
                    }
                </div>
            </div>
        </div>
    )
}
