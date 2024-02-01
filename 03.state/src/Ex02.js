import React from 'react';
import {useState} from 'react';

const Ex02 = () => {
  const [randInt, setRandInt] = useState(generateRandomNumber());
  const [num, setNum] = useState(null);
  const [result, setResult] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  const handleNum = (selectedNum) => {
    setNum(selectedNum);

    if (selectedNum === randInt) {
      setResult('정답입니다!');
    } else {
      setResult('오답입니다!');
    }

    // 다음 라운드를 위해 새로운 랜덤 숫자 생성
    setRandInt(generateRandomNumber());
  };

  let card_style = {
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
  };

  let button_style = {
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div style={card_style}>
      <button style={button_style} onClick={() => handleNum(1)}>1</button>
      <button style={button_style} onClick={() => handleNum(2)}>2</button>
      <button style={button_style} onClick={() => handleNum(3)}>3</button>
      <div>
        <p>내가 입력한 숫자: {num}</p>
        <p>랜덤한 숫자 : {randInt}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Ex02;
