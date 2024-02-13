import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'

const TodoItem = () => {
  return (
    <li className='todo-item'>
        <FaCheckCircle className='todo-item-checkbox'/>
        
        <span className='todo-item-content'>해야할 일</span>
        <button className='todo-item-edit-btn'></button>
        <button className='todo-item-delete-btn'></button>
    </li>
  )
}

export default TodoItem