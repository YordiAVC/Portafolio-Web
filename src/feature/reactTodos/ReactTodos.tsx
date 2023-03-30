import React from 'react'
import { useState,  } from 'react'
import data from './jsons/data.json'
import style from "./reactTodos.module.css"
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

 const ReactTodos = () => {
  const [todos,setTodos]= useState(data)
  
  const onComplete = (id:any) =>{

    setTodos(todos.map((todo)=>{
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}
    }))
    
  }

  const onDeleteItem = (id:any) =>{
    setTodos([...todos].filter(todo => todo.id !== id))
  }
  return (
    <div className={style.container}>
      <TodoForm/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>   
    </div>
          
  )
}
export {ReactTodos};