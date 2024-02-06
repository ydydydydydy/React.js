import React, {useState} from 'react'
import memberList from './data/members.json'

const Ex01 = () => {

  const [members, setMembers] = useState(memberList);

  /*
  filter
  - 배열 내 요소들 중 특정 조건에 해당하는 요소들만
    새로운 배열로 만들어 반환해주는 함수
  - 조건식을 만들면 해당 요소만 추출
  */
 // 업무가 Front-end인 데이터만 추출
 let new_array = members.filter(item=>item.task==='Front-end')
 console.log(new_array);

 // 나이가 27세 미만인 데이터만 추출
 let new_array2 = members.filter(item=>item.age<27);
 console.log(new_array2);
  return (
    <div>
        {members.map((member)=>(
            <p key={member.id}>
                <span>이름:{member.name}</span>
                <br></br>
                <span>업무:{member.task}</span>
            </p>
        ))}
        <h3>27세 미만</h3>
        {new_array2.map((member=>{
          <p key={member.id}>
            <span>이름:{member.name}</span>
            <br></br>
            <span>업무:{member.task}</span>
          </p>
        }))}
    </div>
  )
}

export default Ex01