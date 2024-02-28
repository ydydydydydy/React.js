/* 회원 관련 페이지 기능 구현 
- 기능 : 회원가입, 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원검색 
*/

const express = require("express");
const router = express.Router();
const conn = require('../config/database');

// 회원가입 시, ID 중복체크
router.post('/checkId', (req,res)=>{
    console.log('ID중복체크 요청...', req.body);

    // 클라이언트로부터 전송된 ID
    const { id } = req.body;

    // DB 연동: 전송된 ID가 이미 데이터베이스에 존재하는지 확인
    const userIdCheck = 'SELECT user_id FROM users WHERE user_id = ?';
    conn.query(userIdCheck, [id], (err, rows) => {
        if (err) {
            console.error('ID 중복 체크 오류:', err);
            res.json({ result: 'error' });
        } else {
            // 데이터베이스에서 조회된 결과가 있으면 중복된 ID이므로 'dup'을 응답
            if (rows.length > 0) {
                res.json({ result: 'dup' });
            } else {
                // 조회된 결과가 없으면 중복되지 않은 ID이므로 'uniq'을 응답
                res.json({ result: 'uniq' });
            }
        }
    });
});


// 회원가입 라우터
router.post('/join',(req,res)=>{
    console.log('회원가입 요청...', req.body);

    // DB 연동코드추가
    const {id, pw, name, height, weight, birthdate} = req.body;
    const joined_at = new Date(); // 가입일 추가
    const userJoin = 'insert into users (user_id, user_pw, user_name, user_height, user_weight, user_birthdate, joined_at) values (?, ?, ?, ?, ?, ?, ?)';

    conn.query(userJoin, [id, pw, name, height, weight, birthdate, joined_at], (err, rows) => {
        if(rows){
            console.log('회원가입 완료');
            res.json({result:'success'});
        }else{
            console.log('회원가입 실패');
        }
    })
});


// 로그인 라우터
router.post('/login', (req,res)=>{
    console.log('로그인 요청..', req.body);

    // DB연동코드 추가
    const {id, pw} = req.body;
    const sql = 'select user_id, user_name from users where user_id = ? and user_pw =?';
    conn.query(sql, [id, pw], (err, rows) => {
        console.log('err', err);
        console.log('rows', rows);
        if (rows.length > 0) {
            console.log('로그인 성공');
            res.json({ result: 'success', user: { id, name: rows[0].user_name } });
        }else {
            console.log('로그인 실패');
            res.json({ result: 'fail'});
        }
    })
    // 로그인 성공


    // 로그인 실패
    // res.json({result:'fail'});
});

// 로그아웃 라우터
//  - session을 server에 저장한 경우에는 해당 라우터로 와야함 (기존)
//  - session을 front에 저장한 경우에는 로그아웃을 react에서 설정 가능

// 회원정보 (비밀번호) 변경
router.post('/checkPw', (req,res)=>{
    console.log('비밀번호 변경 요청..', req.body);

    // DB연동코드 추가
    const {id, currentPw, changePw} = req.body;

    const matchPw = 'select * from users where user_id = ? and user_pw = ?';
    conn.query(matchPw, [id, currentPw], (err, rows) => {
        if(rows.length > 0){
            console.log('비밀번호 확인 완료');

            const modifyPw = 'update users set user_pw=? where user_id = ?';
            conn.query(modifyPw, [changePw, id], (err, rows) => {
                if(rows){
                    console.log('비밀번호 수정 성공');
                    res.json({result:'changed'});
                }else{
                    console.log('비밀번호 수정 실패');

                }
            })
        }else{
            console.log('비밀번호 확인해주세요!');
        }
    })

});

// 회원정보 (이름, 이메일) 수정
router.post('/modify', (req,res)=>{
    console.log('회원정보 수정 요청..', req.body);

    // DB연동코드 추가
    const {id, new_name, new_height, new_weight, new_birthdate} = req.body;

    const modifyUserInfo = 'update users set user_name = ?, user_height = ?, user_weight = ?, user_birthdate = ? where user_id = ?';
    conn.query(modifyUserInfo, [new_name, new_height, new_weight, new_birthdate, id], (err, rows) => {
        if(rows){
            console.log('회원정보 수정 완료');
            res.json({result:'success'});
        }else{
            console.log('회원정보 수정 실패');
        }
    })

});

// 회원 탈퇴 라우터
router.post('/delete', (req, res) => {
    console.log('회원탈퇴 요청..', req.body);

    const {id, pw} = req.body.userData;


    const deleteAccount = 'delete from users where user_id = ? and user_pw = ?';
    conn.query(deleteAccount, [id, pw], (err, rows) => {
        console.log(rows.affectedRows);
        if(rows.affectedRows){
            console.log('회원탈퇴 완료');
            res.json({result:'success'});
        }else{
            console.log('회원탈퇴 실패');
            res.json({result:'fail'});
        }
    })
});

// 회원 검색 라우터
router.post('/select', (req,res)=>{
   // DB연동코드 추가

   let rows = [
       {id:'test1',name:'박원호'},
       {id:'test2',name:'임명진'},
       {id:'test3',name:'양세영'},
       {id:'test4',name:'임보미'},
       {id:'test5',name:'양상권'}
   ];

   res.json({rows:rows});
});

module.exports = router;
