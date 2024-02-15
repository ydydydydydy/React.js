import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>Welcome to React Router!</h1>
        <p>About Page!</p>
        
        {/* Home으로 이동하는 Link컴포넌트 생성해보기 */}
        <Link to={"/"}>Home으로 이동</Link>
    </div>
  )
}

export default About