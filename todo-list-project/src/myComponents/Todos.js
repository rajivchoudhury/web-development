import React from 'react';
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style = {myStyle}>
            <h3 className="my-3" >TODOS LIST</h3>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Delete Option</th>
                </tr>
                </thead>
                <tbody>
            {props.todos.length === 0 ? "All Caught Up!!!" :
            props.todos.map((todo) => {
                return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
            })
            }
                </tbody>
            </table>
        </div>
    )
}
