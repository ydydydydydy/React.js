// require, import .. 
const express = require('express');
const app = express();

// Router require 정의(indexRouter, userRouter)
const indexRouter = require('./routes')
const userRouter = require('./routes/user')

// path, cors, body-parser require 정의
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// 정적인 파일을 가져오기 위한 미들웨어 
app.use(express.static(path.join(__dirname, 'react-project', 'build')));

// cors 오류 해결을 위한 미들웨어 
// 1) cors 모듈 설치 : npm i cors 
// 2) require 
// 3) 사용 
app.use(cors());
app.use(express.json());

// body-parser 미들웨어 대체 express 내장 모듈 
app.use(express.urlencoded({extended : true}));

// router 
app.use('/', indexRouter);
app.use('/user', userRouter);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), ()=>{
    console.log('port waiting ... 😵')
});