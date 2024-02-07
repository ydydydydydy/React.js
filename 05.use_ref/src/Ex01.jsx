import React, { useRef, useState } from 'react'

/*
ref란?
- 컴포넌트 내부에 저장공간
- 특정 DOM 요소 접근시 사용

ref 특징
- 화면이 리렌더링시, ref 값 유지
    (리렌더링시 일반 변수는 초기화)
- ref 값 변화시 컴포넌트 리렌더링 x
    (state 값 변화시, 컴포넌트 리렌더링 o)

ref 활용
- 리렌더링 여부와 관계없이 컴포넌트 내부 데이터 유지가 필요할 경우 사용
- 특정 DOM 요소 접근시 사용
    (ex. 포커싱 작업, 속성 변경 등)
*/
const Ex01 = () => {
    let countVar = 0;
    const [countState, setCountState] = useState(0);
    let countRef = useRef(0);

    const varClick = ()=>{
        countVar += 1;
        console.log('var', countVar);
    }
    const stateClick = ()=>{
        setCountState(countState+1);
        console.log('state', countState);
    }
    const refClick = ()=>{
        //console.log('countRef', countRef);
        countRef.current += 1;
        console.log('ref', countRef.current);
    }
  return (
    <div>
        <p>var : {countVar}</p>
        <p>state : {countState}</p>
        <p>ref : {countRef.current}</p>
        <button onClick={varClick}>var +1</button>
        <button onClick={stateClick}>state +1</button>
        <button onClick={refClick}>ref +1</button>
    </div>
  )
}

export default Ex01