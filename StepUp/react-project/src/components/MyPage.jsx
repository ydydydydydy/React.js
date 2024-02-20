import React, {useState, useRef} from "react";
import { Table, Form, Button, Row, Col, Modal } from "react-bootstrap";
import axios from '../axios';
import { useNavigate } from "react-router-dom";
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
    let user = JSON.parse(sessionStorage.getItem('user')) || null;

    //useRef 생성 - 변경할 이름, 변경할 이메일, 현재 비밀번호, 변경할 비밀번호
    const nameRef = useRef();
    const pwRef = useRef();
    const pw2Ref = useRef();
    const heightRef = useRef();
    const weightRef = useRef();
    const birthdateRef = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    /* 비밀번호를 변경하는 changePWD 함수 구현 */
    const changePWD = () => {
        axios
            .post('/user/checkPw',{id:user.id,
                currentPw:pwRef.current.value,
                changePw:pw2Ref.current.value
            })
            .then((res)=>{
                if(res.data.result === 'changed'){
                    alert('비밀번호 변경 완료!');
                    handleClose(); //모달창 닫기
                }
            });
    }

    /* 회원정보를 수정하는 handleModify 함수 구현 */
    const handleModify = () => {
        axios
            .post('/user/modify', {
                id:user.id,
                new_name:nameRef.current.value,
                new_height:heightRef.current.value,
                new_weight:weightRef.current.value,
                new_birthdate:birthdateRef.current.value
            })
            .then((res)=>{
                if(res.data.result === 'success'){
                    sessionStorage.setItem('user',
                        JSON.stringify({
                            ...user,
                            name:nameRef.current.value,
                            height:heightRef.current.value,
                            weight:weightRef.current.value,
                            birthdate:birthdateRef.current.value
                        }));

                    alert('회원정보 변경 완료!');

                    navigate('/main');
                }
            })
    }
    return (
        <div className="main-body">
            {/* 로그인된 상태인지 판별
        - 로그인 상태: 회원정보 출력
        - 비로그인 상태: '로그인 후 이용가능합니다.' 출력
      */}
            {user?
                (<div>
                        <h1>마이페이지</h1>
                        <div align="center">
                            <Table striped="columns">
                                <tbody align="center">
                                <tr>
                                    <td>ID</td>
                                    <td>{user.id}</td>
                                </tr>
                                <tr>
                                    <td>비밀번호</td>
                                    <td>
                                        <div className="d-grid gap-2">
                                            <Button
                                                variant="light"
                                                size="sm"
                                                onClick={handleShow}
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
                                            ref={nameRef}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>height</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            size="sm"
                                            ref={heightRef}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>weight</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            size="sm"
                                            ref={weightRef}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>birthdate</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            size="sm"
                                            ref={birthdateRef}
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <Row>
                                <Col>
                                    {/* handleModify 함수 연결 */}
                                    <Button variant="info" size="lg" onClick={handleModify}>
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
                                <Form.Control type="password" size="sm" ref={pwRef} />
                                <Form.Label>바꿀 비밀번호</Form.Label>
                                <Form.Control type="password" size="sm" ref={pw2Ref}/>
                            </Modal.Body>
                            <Modal.Footer>
                                {/* changePWD 함수 연결 */}
                                <Button variant="info" onClick={changePWD}>
                                    비밀번호 수정
                                </Button>

                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )
                :
                (<h1>로그인 후 이용 가능합니다.</h1>)}
        </div>
    );
};

export default MyPage;