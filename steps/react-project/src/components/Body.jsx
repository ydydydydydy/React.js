import React from "react";
import { Card } from "react-bootstrap";

import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import Join from "./Join";
import Login from "./Login";
import MyPage from "./MyPage";
import MemberList from "./MemberList";
import Delete from "./Delete";

const Body = () => {
  return (
    <div>
      <Card>
        {/* Application의 Header */}
        <Header />

        {/* Application의 Main Content */}
        <Card.Body>
          {/* 
            요청URL별로 이동할 Route 컴포넌트 생성하기
            1. 메인 컴포넌트: /main
            2. 회원가입 컴포넌트: /join
            3. 로그인 컴포넌트: /login
            4. 마이페이지 컴포넌트: /mypage
            5. 회원검색 컴포넌트: /list
            6. 회원탈퇴 컴포넌트: /delete
          */}
            <Routes>
                <Route path='/main' element={<Main/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/mypage' element={<MyPage/>}/>
                <Route path='/list' element={<MemberList/>}/>
                <Route path='/delete' element={<Delete/>}/>
            </Routes>


        </Card.Body>
      </Card>
    </div>
  );
};

export default Body;
