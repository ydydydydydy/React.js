import './App.css'
import React, { useState } from 'react'
import ColorList from './components/ColorList'
import ColorResult from './components/ColorResult'
import { ColorContext } from './context/ColorContext'

const Ex01 = () => {

  const [color, setColor] = useState('black')
  
  return (
    <div>
        <ColorContext.Provider value={{color,setColor}}>
            {/* 1. 색상을 선택했을 때 color state가 변경되도록 구현하기 */}
            <ColorList/>
            <br></br>
            <hr></hr>
            <br></br>
            {/* 2. color state에 저장된 값으로 배경색 변경하기 */}
            <ColorResult/>
        </ColorContext.Provider>
    </div>
  )
}

export default Ex01