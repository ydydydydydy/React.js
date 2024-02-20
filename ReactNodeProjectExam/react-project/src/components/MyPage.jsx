import React, {useState} from "react";
import { Table, Form, Button, Row, Col, Modal } from "react-bootstrap";

/*
  [비밀번호변경 기능 구현]
  1. '비밀번호 변경' 버튼을 클릭한다.

  2. 띄워진 모달 창에 현재 비밀번호와 변경할 비밀번호를 입력한다.

  3. '비밀번호 수정' 버튼을 클릭한다. 이때, node.js 서버로 데이터를 전송한다.(useEffect() 처리)
   - 요청url: /user/checkPw
   - 전송방식: post
   - 데이터: 현재 비밀번호, 바꿀 비밀번호

  4. 응답받은 데이터의 결과가 성공적일 경우 '비밀번호 변경완료!' 알림을 띄운 후 모달 창을 닫는다.
   - 모달창 닫기 -> handleClose() 호출

  [회원정보수정 기능 구현]
  1. 사용자가 변경할 이름과 이메일 정보를 입력한다.

  2. '수정완료'버튼 클릭 시, node.js 서버로 데이터를 전송한다. (useEffect() 처리)
   - 요청url: /user/modify
   - 전송방식: post
   - 데이터: id, new_name, new_email

  3. 응답받은 데이터를 현재 sessionStorage에 업데이트한 후 메인페이지('/link')로 이동한다.
   - '회원 정보변경 성공!' 알림 띄우기
*/
const MyPage = () => {
  /* sessionStorage에 저장된 사용자정보(user) 가져오기 */

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* 비밀번호를 변경하는 changePWD 함수 구현 */


  /* 회원정보를 수정하는 handleModify 함수 구현 */

  return (
    <div className="main-body">
      {/* 로그인된 상태인지 판별
        - 로그인 상태: 회원정보 출력
        - 비로그인 상태: '로그인 후 이용가능합니다.' 출력
      */}
        <div>
          <h1>마이페이지</h1>
          <div align="center">
            <Table striped="columns">
              <tbody align="center">
                <tr>
                  <td>ID</td>
                  <td></td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td>
                    <div className="d-grid gap-2">
                      <Button
                        variant="light"
                        size="sm"
                      >
                        비밀번호 변경
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td>
                    <Form.Control
                      type="text"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>email</td>
                  <td>
                    <Form.Control
                      type="text"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col>
                {/* handleModify 함수 연결 */}
                <Button variant="info" size="lg">
                  수정완료
                </Button>
              </Col>
            </Row>
          </div>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>비밀번호 수정</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label>현재 비밀번호</Form.Label>
              <Form.Control type="password" size="sm" />
              <Form.Label>바꿀 비밀번호</Form.Label>
              <Form.Control type="password" size="sm" />
            </Modal.Body>
            <Modal.Footer>
              {/* changePWD 함수 연결 */}
              <Button variant="info" >
                비밀번호 수정
              </Button>

              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
};

export default MyPage;
