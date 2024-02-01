import './App.css';
import {useState} from 'react';

/*
  state(상태)
   - 컴포넌트 내부에서 사용하는 데이터
   - 상태값이 변화하면 React에서 감지하고 이후에 변경된 값을 화면에 반영(리렌더링)

   state 사용방법
   1. 생성
    const [state이름, set함수이름] = useState(초기값);
    - state이름: 컴포넌트 내부에서 사용하는 데이터
    - set함수이름: state를 변경하는 함수
    * state를 직접적으로 수정x 반드시 함수를 통해서 변경!
   2. state를 사용할 때 state이름으로 접근
   3. state를 변경할 때 set함수로 변경
   4. 반드시 import 되어있는지 체크! -> import {useState} from 'react';
*/

function App() {

  let count = 0;
  let [count2, setCount2] = useState(0);

  const handleClick = () => {
    console.log("클릭");
    count += 1;
    console.log(count);
  }

  const handleClick2 = () => {
    setCount2(count2+1); // count2+=1 (x)
    console.log(count2);
  }

  return (
    <div>
      <p>숫자:{count}</p>
      <p>state:{count2}</p>
      <button onClick={handleClick}>클릭</button>
      <button onClick={handleClick2}>클릭</button>
    </div>
  );
}

export default App;
