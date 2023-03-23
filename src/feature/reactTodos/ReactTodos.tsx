import React from 'react'
import { useState } from 'react'
import data from './jsons/data.json'
import style from "./reactTodos.module.css"
import { TodoList } from './components/TodoList'

export const ReactTodos = () => {
  const [todos,setTodos]= useState(data)
  
  return (
    <div className={style.container}>
      <TodoList todos={todos} />
    </div>
          
  )
}
