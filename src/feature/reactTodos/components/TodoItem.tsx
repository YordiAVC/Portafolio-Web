import React from "react";
import style from '../reactTodos.module.css';

function TodoItem({todo, onComplete, onDeleteItem}) {

    const GetStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: 'black',
            margin: "20px",
            padding: "10px",
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: "#ccf7e3"
        }
    }

    return (
        <div style={GetStyle()}>
            <input type="checkbox" checked={todo.completed} onChange={()=> onComplete(todo.id)} />
            {todo.task}
            <button className={style.add_btn} onClick={()=> onDeleteItem(todo.id)}>X</button>
        </div>
    )
}
export {TodoItem};