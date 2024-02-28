import React, { useRef } from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from "axios";
import {useNavigate} from "react-router-dom";

/*
  [로그인 기능 구현]
  1. 사용자는 id, pw를 입력한다.
  
  2. Submit버튼을 클릭한다. 이때, 입력한 정보는 node.js 서버에 전송한다. (useEffec로 처리)
   - 이벤트처리: onSubmit
   - 요청url: /user/login
   - 전송방식: post
   - 데이터: id, pw
  
  3. 응답받은 데이터에 따라 페이지를 이동한다.
   - 성공한 경우
    -> sessionStorage에 응답받은 사용자정보를 json 문자열형태로 저장한다. (JSON.stringify()활용)  
    -> '로그인 성공!' 알림을 띄운 후 메인페이지('/link')로 이동한다.
                  

   - 실패한 경우 -> ''아이디 혹은 비밀번호를 확인해주세요.' 알림을 띄운 후 로그인페이지('/login')로 이동한다.
*/
const Login = () => {

  // useRef 생성 - id, pw
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  /** 로그인 기능을 해주는 handleLogin 함수 구현 */
  const handleLogin = (e) => {
    e.preventDefault();

    axios
        .post('/user/login', {id: idRef.current.value, pw: pwRef.current.value})
        .then((res)=>{
          // 로그인 성공 : success | 로그인 실패 : fail
          if(res.data.result === 'success'){
            alert('로그인 성공!');

            // localStorage : 브라우저에 정보를 저장하는 저장소
            // - 브라우저가 종료되더라도 데이터가 남아있음
            // - 기능은 sessionStorage와 동일한 기능

            // sessionStorage : 브라우저에 정보를 저장하는 저장소
            // - 브라우저가 종료되면 데이터가 삭제
            // - 로그인 기능 ( front만 구현했을 때 )
            // - 기능 : 저장, 읽기, 삭제
            // - 저장 : sessionStorage.setItem(키, 값)
            // - 읽기 : sessionStorage.getItem(키)
            // - 삭제 : sessionStorage.removeItem(키)

            //* sessionStorage는 front에서 로그인 기능 구현 샘플로 제작
            // 실제로는 node.js 나 다른 서버단에서의 session으로 구현할 것!

            sessionStorage.setItem('user',JSON.stringify(res.data.user));

            // window.location.href = '/main';
            navigate('/main');
          }else{
            alert('아이디 혹은 비밀번호를 확인해주세요.');
            navigate('/login');
          }
        });
  }
  
  return (
    <div>
    <h1>로그인</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id" ref={idRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef}/>
        </Form.Group>


        <div className='d-grid gap mb-3'>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </div>
      </Form>
  </div>
  )
}

export default Login