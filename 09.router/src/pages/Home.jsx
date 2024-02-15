import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/*
    Link컴포넌트: 클릭했을 때 바로 페이지 이동
    useNavigate(): 조건에 따라 페이지 이동
*/
const Home = () => {

  
  const navigate = useNavigate();
  
  const goToProduct = () => {
    // 조건에 따른 페이지 이동기능을 구현할 때
    navigate('/product')
  }

  return (
    <div>
        <h1>Welcome to React Router!</h1>
        <p>Home Page!</p>
        {/* a요소로 사용하면 href에 적힌 URL을 새롭게 요청을 보내는 행위 */}
        <a href="/about">About Page로 이동 - a태그</a>
        <br/>
        {/* Link컴포넌트를 사용하면 url주소만 바뀌고 컴포넌트가 교체되는 행위 */}
        <Link to={"/about"}>About Page로 이동</Link>
        <br/>
        <button onClick={goToProduct}>상품페이지로 이동</button>
        <br/>
        <Link to={"/mypage"}>마이페이지로 이동</Link>
    </div>
  )
}

export default Home