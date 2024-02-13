import React from 'react'

const TodoInput = () => {
  return (
    <div className='todo-inputbox'>
        <input type='text' className='todo-inputbox-input' placeholder='할 일을 입력해주세요.'/>
        <input type='button' className='todo-inputbox-add-btn' value='등록'/>
    </div>
  )
}

export default TodoInput