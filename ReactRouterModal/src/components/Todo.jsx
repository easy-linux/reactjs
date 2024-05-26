import React from 'react'

const Todo = ({ todo }) => {
    return (
        <article className={'block'}>
            <h1>{todo.title}</h1>
            <div>
                User ID: {todo.userId}
            </div>
        </article>)
}
export default Todo
