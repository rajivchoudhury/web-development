import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <tr>
            <td>{todo.title}</td>
            <td>{todo.desc}</td>
            <td>
                <button className="btn btn-sm btn-outline-danger" onClick = {()=>onDelete(todo)}>Delete</button>
            </td>
        </tr>
    )
}
