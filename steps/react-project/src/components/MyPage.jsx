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

    const maskPassword = (password) => {
      return '*'.repeat(6);
  };

    return (
<div>
  {user?
    (<div>
    <h1>
        마이페이지
    </h1>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label for="userId">ID</Form.Label>
                <Form.Control
                    type="text"
                    id="userId"
                    value={user.id}
                    disabled
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label for="userPw">비밀번호</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" style={{  display:"flex"  }}>
                <input className="form-control" style={{ width:"83%"  }} value={maskPassword(pwRef)} disabled />
                <Button style={{  width:"17%"  }}
                    variant="light"
                    size="sm"
                    onClick={handleShow}
                >
                    비밀번호 변경
                </Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label for="name">이름</Form.Label>
                <Form.Control
                    type="text"
                    id="name"
                    ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label for="height">키(cm)</Form.Label>
                <Form.Control
                    type="text"
                    id="height"
                    ref={heightRef}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label for="weight">몸무게(kg)</Form.Label>
                <Form.Control
                    type="text"
                    id="weight"
                    ref={weightRef}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label for="birthdate">생일</Form.Label>
                <Form.Control
                    type="date"
                    id="date"
                    ref={birthdateRef}
                />
            </Form.Group>
            <div className="d-grid gap mb-3" style={{ justifyContent: 'center', marginTop: '70px' }}>
              <Button variant="info" size="md" onClick={handleModify} style={{ border: 'none', width: '120px',textAlign: 'center' }}>
                  수정완료  
              </Button>
            </div>
        </Form>
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
                (<div>{alert('로그인후 이용 가능합니다.')} {window.location.href = '/main'}</div>)}
        </div>
    );
};

export default MyPage;