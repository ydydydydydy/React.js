import React, { useContext, useState } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {
  const {color} = useContext(ColorContext)

  return (
    <div>
        <h1>선택한 색상</h1>
        <div className='box' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default ColorResult