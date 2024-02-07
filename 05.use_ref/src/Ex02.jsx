import React, { useRef } from 'react'

const Ex02 = () => {
    const inputRef = useRef();
    const jsClick = ()=>{
        const inputJs = document.querySelector('.inputJs');
        console.log(inputJs.value);
    }
    const refClick = ()=>{
        console.log(inputRef); // ref
        console.log(inputRef.current); // input
        console.log(inputRef.current.value); // input 입력값
    }
  return (
    <div>
        <input type="text" className='inputJs'/>
        <button onClick={jsClick}>JS</button>
        <input type="text" ref={inputRef} />
        <button onClick={refClick}>Ref</button>
    </div>
  )
}

export default Ex02