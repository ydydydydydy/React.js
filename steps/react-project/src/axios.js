import axios from 'axios'; 

/* 
    baseURL: 요청할 서버의 host와 port를 포함한 주소를 의미
    ex) http://localhost:3333/main
     -> http://localhost:3333 
    * node.js와 연동 시, node.js에 정의한 port번호를 확인한 후 정의
*/
const instance = axios.create({
    baseURL : 'http://localhost:3001'
});

export default instance; 