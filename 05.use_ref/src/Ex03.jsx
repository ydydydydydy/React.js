import React, { useRef } from 'react'

const Ex03 = () => {
    /*
    ID가 smart, PW가 1234
    일치 => 환영합니다!
    불일치 => 로그인 실패..

    - 로그인 결과를 판별하여 알림 팝업창 띄워주기
    - input 안의 입력값을 ref를 활영하여 가져오기
    */
   const idRef = useRef();
   const pwRef = useRef();

   const loginClick = ()=>{
        idRef.current.value==='smart' && pwRef.current.value==='1234'
        ? alert(`환영합니다! ${idRef.current.value}님`)
        : alert('로그인 실패..');
   }
  return (
    <div>
        <input type="text" placeholder='ID 입력'
        ref={idRef}/>
        <br/>
        <input type="password" placeholder='PW 입력'
        ref={pwRef}/>
        <br/>
        <button onClick={loginClick}>로그인</button>
    </div>
  )
}

export default Ex03