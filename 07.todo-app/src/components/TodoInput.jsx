import React, { useContext, useRef } from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuid } from 'uuid';

// 할 일 추가
// - 사용자가 입력한 값을 가져온다. (useRef()활용)
// - todos에 할일을 추가한다. (setTodos()활용)
// - 할일 목록에 저장된 요소 : 고유값(id), 할일(content), 완료여부(complete)
const TodoInput = () => {

  console.log(uuid());
  const {todos, setTodos} = useContext(TodoContext)

  const inputRef = useRef(null)

  const addTodo = () => {
    let content = inputRef.current.value;
    console.log(content);

    // 할 일에 관한 객체 생성
    let todo = {id:uuid(), content: content, complete:false};
    
    // 전개연산자를 사용해서 기존값을 복사하고 새로운 값을 추가
    setTodos([...todos, todo])

    // input 요소의 내용 초기화
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  const addTodo2 = (e) => {

    // Enter키를 누른 조건
    console.log(e.keyCode===13);

    if(e.keyCode===13){

      
      let content = inputRef.current.value;
      console.log(content);
      
      // 할 일에 관한 객체 생성
      let todo = {id:uuid(), content: content, complete:false};
      
      // 전개연산자를 사용해서 기존값을 복사하고 새로운 값을 추가
      setTodos([...todos, todo])
      
      // input 요소의 내용 초기화
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  return (
    <div className='todo-inputbox'>
        <input type='text' className='todo-inputbox-input' placeholder='할 일을 입력해주세요.'
            ref={inputRef} onKeyUp={addTodo2}/>
        <input type='button' className='todo-inputbox-add-btn' value='등록'
        onClick={addTodo}/>
    </div>
  )
}

export default TodoInput