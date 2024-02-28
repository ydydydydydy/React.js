import React, {useEffect, useRef, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import axios from "axios";

/*
  [회원탈퇴 기능]
   1. 사용자는 id,pw를 입력한다. 
    - state로 관리

   2. Submit 버튼을 클릭한다. 이때, 입력한 정보는 node.js 서버에 전달한다. (useEffect로 처리)
    - 이벤트처리: onSubmit
    - 요청url: /user/delete
    - 전송방식: post
    - 데이터: userData

   3. 응답받은 데이터에 따라 페이지를 이동한다.
    - 성공한 경우 -> '다음에 또 만나요!' 알림을 띄운 후 메인페이지('/main')로 이동한다.
    - 실패한 경우 -> '아이디 혹은 비밀번호를 다시 확인해주세요.' 알림을 띄운 후 회원탈퇴페이지('/delete')로 이동한다.

*/
const Delete = () => {

  let user = JSON.parse(sessionStorage.getItem('user') || null);

  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
 
  /* 탈퇴할 회원 정보를 state에 저장하는 handleDelete 함수 구현 */
  const handleDelete = (e) => {
    e.preventDefault();

    setUserData({
      id: idRef.current.value,
      pw: pwRef.current.value
    });
  }

  /*
     node.js서버로 회원탈퇴정보를 보내는 useEffect 구현 
     - 로그인되어 있는 상태인지 판별 후 전송
  */
  useEffect(() => {
    
    // 로그인되어 있는 상태인지 판별
    const isLogin = () => {
      if(userData.id !== undefined){
        if (user) {
          console.log('로그인 되어 있습니다.');

          axios
              .post('/user/delete', {userData: userData})
              .then((res) => {
                console.log('요청성공', res.data);

                if(res.data.result === 'success'){
                  window.alert('탈퇴가 완료되었습니다.');
                  sessionStorage.removeItem('user');
                  navigate('/main');
                } else{
                  if(userData.id !== ''){
                    window.alert('다시 한 번 확인해주세요.');

                    setUserData({
                      id: '',
                      pw: ''
                    });

                    navigate('/delete');
                  }

                }
              })
        } else {
          console.log('로그인 되어 있지 않습니다.');
        }
      }
    }
    isLogin();
  }, [userData, user]);

  
  return (
    <div>
      <h1>회원탈퇴</h1>
      <Form onSubmit={handleDelete}>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id" ref={idRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Delete