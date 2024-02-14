import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoContext'

const TodoList = ({title, complete}) => {

  const { todos } = useContext(TodoContext)

  return (
    <div className='todo-list'>
        <p className='todo-list-tit'>[{title}: 0개]</p>
        <ul className='todo-list-ul'>
            {todos.map((todo)=>{
              if(todo.complete === complete){
                 return <TodoItem key={todo.id} todo={todo}/>
              }else{
                return null
              }
            })}
        </ul>
    </div>
  )
}

export default TodoList