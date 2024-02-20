import React, { useEffect, useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from '../axios'


/*
  [회원가입 기능 구현]
  1. 사용자는 회원가입 폼의 모든 정보를 입력한다. ( useRef 활용 )
  2. 회원가입 버튼을 누른다.
    - handleJoin 함수 호출
    - 입력한 모든 정보를 'userData' state에 저장
  3. 'userDate' state의 변화를 감지하여 node.js 서버에 전달한다. (useEffect 처리)
    - 이벤트처리: onSubmit
    - 요청url: /user/join
    - 전송방식: post
    - 데이터: userData

  4. 응답받은 데이터에 따라 페이지를 이동한다.
    - 성공한 경우 -> '환영합니다!' 알림을 띄운 후 메인페이지('/link')로 이동한다.
    - 실패한 경우 -> '다시 한 번 확인해주세요..' 알림을 띄운 후 회원탈퇴페이지('/join')로 이동한다.

  5. 사용자가 입력한 아이디가 중복된 아이디인지 중복체크 버튼을 클릭한다.
    - 이벤트처리: onClick
    - 요청url: /user/checkId
    - 전송방식: post
    - 데이터: id

  6. 응답받은 데이터에 따라 페이지에 결과를 출력한다.
    - 중복된 값(dup)이라면 -> '※ 사용 불가능한 아이디입니다. 다른 아이디를 입력해주세요.' 출력 (글자색:빨강)
    - 고유갑(uniq)라면 -> '※ 사용 가능한 아이디입니다.' 출력 (글자색:초록)
    * 출력은 '중복체크'버튼 아래 <span>요소에 출력
    * 글자색과 내용은 각각 color, text state로 관리

*/
const Join = () => {

  //useRef 초기화
  const idRef = useRef()
  const pwRef = useRef()
  const pw2Ref = useRef()
  const nameRef = useRef()
  const emailRef = useRef()

  //사용자의 정보를 저장하는 state
  const [userData, setUserData] = useState({})
  const [text, setText] = useState('')

  /* ID의 중복체크를 해주는 checkId 함수 구현 */
  const checkId = () => {

    axios
    .post('/user/checkId', { id:idRef.current.value })
    .then((res)=> {
      if(res.data.result === 'dup'){
          setText('※ 사용 불가능한 아이디입니다. 다른 아이디를 입력해주세요.');
      }else{
          setText('※ 사용 가능한 아이디입니다.');
      }
    })
  }
 

  /* 회원가입 기능을 하는 handleJoin 함수 구현  */
  const handleJoin = (e) => {
    // 기본 이벤트 동작을 막는 함수
    e.preventDefault();
    console.log(idRef.current.value, pwRef.current.value);

    setUserData({
      id:idRef.current.value,
      pw:pwRef.current.value,
      name:nameRef.current.value,
      email:emailRef.current.value
    });
  }

  /* 
    node.js서버로 회원가입정보 보내는 useEffect 구현 
    - 로그인되어 있는 상태인지 판별 
    - 비밀번호1, 비밀번호2가 서로 같을 때 데이터 전송 시작 로직 구현
      -> 일치하지 않은 경우 : '※ 비밀번호가 일치하지 않습니다.' 출력(글자색은 빨간색)
  */
  useEffect(()=>{
    if(userData.id !== undefined){
      if(pwRef.current.value === pw2Ref.current.value){
        axios
        .post('/user/join', { userData:userData })
        .then((res)=>{
          console.log('요청성공', res.data);
  
          if(res.data.msg === 'success'){
            window.alert('환영합니다~!');
            window.location.href = '/main';
          }else{
            window.alert('다시 한 번 확인해주세요...')
            window.location.href = './join';
          }
  
        });
      }
    }
  },[userData]);

  return (
    <div>
      <h1>회원가입</h1>
      <hr/>
      <Form onSubmit={handleJoin}>

        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text" placeholder="Enter ID" ref={idRef}/>
        </Form.Group>

        <div className='d-grid gap mb-3'>
          <Button variant='light' onClick={checkId}>중복체크</Button>
          {/* 아이디 중복여부에 따라 다른 내용 출력 */}
          <span>{text}</span>
        </div>
        
        <Form.Group className="mb-3" controlId="formBasicPassWord1">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
          type="password" placeholder="Enter Password" ref={pwRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassWord2">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
          type="password" placeholder="Confirm Password" ref={pw2Ref}/>
        </Form.Group>

        {/* 비밀번호1, 비밀번호2가 일치하지 않을 때 내용 출력 */}
        <span>※ 비밀번호가 일치하지 않습니다.</span>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>name</Form.Label>
          <Form.Control
          type="text" placeholder="Enter Name" ref={nameRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
          type="text" placeholder="Enter Email Address" ref={emailRef}/>
        </Form.Group>

        <div className='d-grid gap mb-3'>
          <Button variant='info' type='submit'>회원가입</Button>
        </div>

      </Form>
    </div>
  )
}

export default Join