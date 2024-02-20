import React from 'react'
import {Form, Button} from 'react-bootstrap'

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
    - 성공한 경우 -> '다음에 또 만나요!' 알림을 띄운 후 메인페이지('/link')로 이동한다.
    - 실패한 경우 -> '아이디 혹은 비밀번호를 다시 확인해주세요.' 알림을 띄운 후 회원탈퇴페이지('/delete')로 이동한다.

*/
const Delete = () => {
 
  /* 탈퇴할 회원 정보를 state에 저장하는 handleDelete 함수 구현 */

  /*
     node.js서버로 회원탈퇴정보를 보내는 useEffect 구현 
     - 로그인되어 있는 상태인지 판별 후 전송
  */

  
  return (
    <div>
      <h1>회원탈퇴</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Delete