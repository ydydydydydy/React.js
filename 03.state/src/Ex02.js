import React from 'react';
import {useState} from 'react';

/*
    실습2) 랜덤 숫자 맞추는 페이지 구현
    1. 사용자가 1~3 사이의 버튼을 클릭한다.
    2. 랜덤 숫자를 생성한다 (1~3)
    3. 사용자가 누른 숫자의 값과 랜덤숫자를 비교한다.
      - 두 숫자가 일치하면 "정답입니다"
      - 두 숫자가 일치하지 않으면 "오답입니다"
*/

const Ex02 = () => {

  const [userNum, setUserNum] = useState(0);
  const [computerNum, setComputerNum] = useState(0);
  const [result, setResult] = useState("");
  
  const handleNum = (event) => {
    const user = parseInt(event.target.innerText);
    console.log(event.target.innerText);

    const computer = parseInt(Math.random()*3)+1;
    console.log('랜덤숫자:', computer);

    setUserNum(user);
    setComputerNum(computer);

    if(user === computer){
      setResult("정답입니다");
    }else{
      setResult("오답입니다");
    }

  }

  return (
    <div>
      <button onClick={handleNum}>1</button>
      <button onClick={handleNum}>2</button>
      <button onClick={handleNum}>3</button>
      <p>내가 선택한 숫자:{userNum}</p>
      <p>생성된 숫자:{computerNum}</p>
      {/* <p>{result}</p>     */}
      { userNum === computerNum ? <p>정답입니다😇</p>:<p>오답입니다👿</p>}
      </div>
  )
}

export default Ex02;
