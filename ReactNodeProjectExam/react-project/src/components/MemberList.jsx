import React from "react";

/*
  [회원검색 기능 구현]
  1.사용자가 페이지 접속 시, node.js 서버로부터 회원검색을 요청한다.(useEffect() 처리)
   - 요청url: /user/select
   - 전송방식: post
   * 최초 접속 시 1번 요청
  
  2. 응답받은 데이터를 'list' state에 저장한다.
*/
const MemberList = () => {
  /* sesstionStorage로부터 사용자정보(user)를 가져온다. */

  /* 회원 검색을 요청하는 useEffect 구현 */

  return (
    <div>
      {/* 로그인된 상태인지 판별
          - 로그인 상태: 회원정보 출력
          - 비로그인 상태: '로그인 후 이용가능합니다.' 출력
      */}
      
        <div>
          <h1>회원정보</h1>
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
            {/* map()를 활용하여 서버로부터 받아온 회원정보 출력 */}
            
          </table>
        </div>
     
    </div>
  );
};

export default MemberList;
