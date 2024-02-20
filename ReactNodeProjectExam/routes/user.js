/* 회원 관련 페이지 기능 구현 
- 기능 : 회원가입, 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원검색 
*/

const express = require("express");
const router = express.Router();

// 회원가입 시, ID 중복체크
router.post('/checkId', (req,res)=>{
    console.log('ID중복체크 요청...', req.body);

    // DB연동 추가

    // 응답할 데이터 -> 중복: dup | 고유값: uniq
    res.json({result:'uniq'});
});

// 회원가입 라우터
router.post('/join',(req,res)=>{
    console.log('회원가입 요청...', req.body);

    // DB 연동코드추가

    res.json({msg:'success'});
});

// 로그인 라우터
router.post('/login', (req,res)=>{
    console.log('로그인 요청..', req.body);

    // DB연동코드 추가

    // 로그인 성공
    res.json({result: 'success', user:{id:'smhrd',pw:'1234',name:'Justin',email:'smhrd@naver.com'}});

    // 로그인 실패
    // res.json({result:'fail'});
});

// 로그아웃 라우터
//  - session을 server에 저장한 경우에는 해당 라우터로 와야함 (기존)
//  - session을 front에 저장한 경우에는 로그아웃을 react에서 설정 가능

// 회원정보 (비밀번호) 변경
router.post('/checkPw', (req,res)=>{
    console.log('비밀번호 변경 요청...', req.body);

    // DB연동코드 추가

    res.json({result:'changed'});
});
// 회원정보 (이름, 이메일) 수정
router.post('/modify', (req,res)=>{
    console.log('회원정보 변경 요청..', req.body);

    // DB연동코드 추가
    res.json({result:'success'})
});
// 회원 탈퇴 라우터

// 회원 검색 라우터
router.post('/select', (req,res)=>{
    // DB연동코드 추가

    let rows = [
        {id:'test1', name:'박원호'},
        {id:'test2', name:'임명진'},
        {id:'test3', name:'양세영'},
        {id:'test4', name:'임보미'},
        {id:'test5', name:'양상권'}
    ];

    res.json({rows:rows});
});

module.exports = router;