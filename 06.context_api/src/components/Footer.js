import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  
  const {isDark, setIsDark} = useContext(ThemeContext)

  const style = {
      backgroundColor:isDark?'black':'white'
  }

  return (
    <div className='footer' style={style}>
        <button className='button' onClick={()=>setIsDark(!isDark)}>
            {isDark?'화이트모드':'다크모드'}
        </button>
    </div>
  )
}

export default Footer