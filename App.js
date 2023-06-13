
import './App.css';
import { useState } from 'react';



function App() {
 
 
  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]= useState("")

const handleChange = (event)=>{
  setNewTask(event.target.value);
}
const addTask= () =>{
  
const newTodoList = [...todoList , newTask]
setTodoList(newTodoList)
}
const deleteTask=(taskName)=>{
  setTodoList(todoList.filter((task)=> task !== taskName))
  
}

  return (
    <div className='App'>
      <div className='addTask'>
        <input className='input' onChange={handleChange}/>
        <button className='add' onClick={addTask}>Add Task</button>
    
      </div>
      <div className='List'>
        {todoList.map((task) =>{
          return <div> <h1>{task}</h1>
          <button className='delete' onClick={ ()=>deleteTask(task)}>Delete</button>
          
          </div>
        }
        )}
      </div>
      
    </div>
  )
}

export default App
