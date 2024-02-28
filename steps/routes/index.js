/* 메인페이지 구현 */
const express = require('express');
const router = express.Router();
const path = require('path');

// 메인페이지 라우터
// - react-prject 내 build폴더 -> index.html 파일 경로 설정
router.get('/main', (req, res)=>{
    res.sendFile(path.join(__dirname,'..','react-project','build','index.html'));


});

module.exports = router ; 