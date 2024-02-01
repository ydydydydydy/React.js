import React from 'react'
import {useState} from 'react'

const Like = () => {

  const [heart, setHeart] = useState('🤍');
  const [count, setCount] = useState(0);

  const handleLike = () =>{

    if(count === 0){
        setCount(1);
        setHeart('💙');
    }else{
        setCount(0);
        setHeart('🤍')
    }

  }

  return (
    <div>
        <span onClick={handleLike}>{heart}</span>
        <span>좋아요 0개</span>
    </div>
  )
}

export default Like