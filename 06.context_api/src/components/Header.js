import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {

  //Context에 정의된 state를 가져오는 방법
  const {isDark, user} = useContext(ThemeContext)

  return (
    <div className={`header ${isDark?'header-dark':''}`}>
        <h1>Welcome {user}</h1>
    </div>
  )
}

export default Header