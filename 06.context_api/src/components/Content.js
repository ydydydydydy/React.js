import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Content = () => {
  const {isDark, user} = useContext(ThemeContext)

  const style={
      backgroundColor:isDark?'black':'white',
      color:isDark?'white':'black'
  }
  return (
    <div className='content' style={style}>{user}님, 오늘은 날씨가 따뜻하네요!</div>
  )
}

export default Content