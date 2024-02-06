import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItem from './components/MenuItem';
import menuData from './data/coffee_menu.json';
import './style/Ex02.css';

const Ex02 = () => {
  console.log(menuData);
    /*
    카페 메뉴를 출력하는 웹 페이지 구현 실습
    */
  return (
    <div className='menu-list'>
    {menuData.map((item)=>(
        <MenuItem name={item.name} price={item.price}
        img={item.img} key={item.id}/>
      ))}
    </div>
  )
}

export default Ex02