import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext';

const ColorList = () => {

  const {setColor} = useContext(ColorContext);

  return (
    <div>
        <h1>원하는 색을 클릭해보세요!</h1>
        <div className="colorList">
            <div className='box color-red' onClick={()=>setColor('red')}></div>
            <div className='box color-orange' onClick={()=>setColor('orange')}></div>
            <div className='box color-yellow' onClick={()=>setColor('yellow')}></div>
            <div className='box color-green' onClick={()=>setColor('green')}></div>
            <div className='box color-blue' onClick={()=>setColor('blue')}></div>
        </div>
    </div>
  )
}

export default ColorList