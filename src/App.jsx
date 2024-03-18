import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const fetchTodos = async () =>{ 
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      }
      fetchTodos();
      console.log(todos);
    },todos)

  return (
    <div style={{display: "flex", gap: "100px", margin: "50px" , justifyContent: "center"}}>
          <div style={{border: "1px solid white", padding :"20px"}}>
            {todos.map((x,id) => {
                  if(!x.completed){
                    return  (<Todo onClick={() => {
                      x.completed = true;
                    }} key = {x.id} title={x.title} status = {x.completed}></Todo>)
                  }
                })}
          </div>
          <div style={{border: "1px solid white ", padding :"20px"}}>
            {todos.map((x) => {
              if(x.completed){
                    return  (<Todo  key = {x.id} title={x.title} status = {x.completed}></Todo>)
                  }
                })}
          </div>
    </div>
  )
}

function Todo({title, status, onClick}) {
  return (
    <div>
      <h4> { title } </h4>
      <button onClick={onClick} >{status?"completed":"notCompleted"}</button>
    </div>
  )
}

export default App

