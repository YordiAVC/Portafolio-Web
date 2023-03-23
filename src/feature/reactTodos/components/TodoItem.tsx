import React from 'react';
export function TodoItem({ todo }) {
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
            {todo.task}
        </div>
    )
}
