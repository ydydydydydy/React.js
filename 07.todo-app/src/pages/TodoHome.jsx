import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>Todo List</h1>

        {/* 할 일을 입력받는 컴포넌트 */}
        <TodoInput/>

        {/* 해야할 목록 출력 */}
        <TodoList/>

        {/* 완료된 목록 출력 */}
        <TodoList/>

    </div>
  )
}

export default TodoHome