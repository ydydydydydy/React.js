import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

/*
    [로그아웃 기능구현]
    1. 사용자는 로그아웃 버튼을 클릭한다.
     - sessionStorage에 저장된 내용을 삭제한 후 메인페이지('/link')로 이동한다.
     - 'user'라는 이름의 값을 null 처리
*/
const Header = () => {

  const navigate = useNavigate();

  /* 로그아웃 하는 handleLogout 함수 구현 */
  const handleLogout = () => {
    alert('로그아웃되었습니다!');

    sessionStorage.removeItem('user');
    window.location.href = '/main';
  }

  return (
    <Card.Body>
      <Nav variant="tabs">
        <Link to="/main">
          <Button variant="light">Main</Button>
        </Link>

        {/* 비회원 권한 */}
        <Link to="/join">
          <Button variant="light">회원가입</Button>
        </Link>
        <Link to="/login">
          <Button variant="light">로그인</Button>
        </Link>

        {/* 회원 권한 */}
        <Link to="/mypage">
          <Button variant="light">마이페이지</Button>
        </Link>
        <Link to="/list">
          <Button variant="light">회원검색</Button>
        </Link>
        <Link to="/delete">
          <Button variant="light">회원탈퇴</Button>
        </Link>
        {/* Case 1) 서버에 세션 저장한 경우 = link  */}
        {/* <Link to='/user/logout'> */}

        {/* Case 2) 브라우저에 세션 저장한 경우   */}
        <Button variant="light" onClick={handleLogout}>로그아웃</Button>

        {/* </Link> */}
      </Nav>
    </Card.Body>
  );
};

export default Header;
