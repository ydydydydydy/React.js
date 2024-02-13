import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoContext'

const TodoList = () => {

  const { todos } = useContext(TodoContext)

  return (
    <div className='todo-list'>
        <p className='todo-list-tit'>[해야할 일: 0개]</p>
        <ul className='todo-list-ul'>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    </div>
  )
}

export default TodoList