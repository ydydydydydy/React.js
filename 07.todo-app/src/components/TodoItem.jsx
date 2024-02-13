import React, { useContext } from 'react'
import {FaCheckCircle, FaRegCircle} from 'react-icons/fa'
import { TodoContext } from '../context/TodoContext'

// 할 일 수정 기능
// 할 일 완료 체크기능
// 할 일 삭제 기능
const TodoItem = ({todo}) => {

  const {todos, setTodos} = useContext(TodoContext)
  const completeChange = () => {

    let updateList = todos.map()

  }

  return (
    <li className='todo-item'>
        {todo.complete ? 
        (<FaCheckCircle style={{color:'green'}} className='todo-item-checkbox'/>)
        :
        (<FaRegCircle style={{color:'green'}} className='todo-item-checkbox'/>)}
        

        <span className='todo-item-content'>{todo.content}</span>
        <button className='todo-item-edit-btn'>✏</button>
        <button className='todo-item-delete-btn'>🗑</button>
    </li>
  )
}

export default TodoItem