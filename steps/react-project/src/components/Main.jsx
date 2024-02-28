import React from 'react'

/*
  [메인페이지 기능 구현]
  1.사용자 접속 시, sessionStroage에 저장된 사용자 정보(user)를 가져온다.
  2.사용자 정보 여부에 따라 다른 내용을 페이지에 출력한다.(조건부렌더링, h1요소활용)
    - 로그인 상태: '로그인 후 이용가능합니다.' 출력
    - 비로그인 상태: 'OOO님 환영합니다.' 출력
*/
const Main = () => {

  // sessionStroage에서 사용자정보 가져오기
  // JSON.parse() : 문자열 -> 객체로 변환
  // JSON.stringfy() : 객체 -> 문자열로 변환
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div>
        {user?
        (<h1>{user.name}님 환영합니다:)</h1>):
        (<h1>로그인 후 이용가능합니다.</h1>)}
    </div>
  )
}

export default Main