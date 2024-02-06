import './App.css';

function App() {

  let student = [
    {id:1, name:"홍길동", age:30, gender:"M"},
    {id:2, name:"심청이", age:25, gender:"W"}
  ];

  // map()는 기존 배열의 내용을 새로운 배열로 생성하는 함수
  // map()는 배열 내 모든 요소를 순차적으로 접근해서 원하는 형태로 반환할 수 있다.

  // 문법: 배열객체.map((요소, 인덱스)=>{}) -> return문 밖에서 
  //       배열객체.map((요소, 인덱스)=>()) -> return문 안에서
  // * 인덱스는 생략가능
  // 요소: 배열 내 값

  let new_array = student.map((item, index)=>item.name);
  console.log(new_array);

  let new_array2 = student.map((item) => <h1>{item.name}</h1>);

  return (
    <div>
      {/* map()함수를 이용해서 데이터를 HTML요소가 함께 반복할 때
          HTML요소 내 key 속성을 고유한 값으로 반드시 설정해줘야 한다
          * index 활용은 권장하지 않음
       */}
      {student.map((item, index)=>(
        <p key={item.id}>{index}.{item.name} / {item.age} / {item.gender==="M"?"남자":"여자"}</p>
      ))}

      {new_array}

      {new_array2}
    </div>
  );
}

export default App;