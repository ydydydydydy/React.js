import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItem from './components/MenuItem';
import menuData from './data/coffee_menu.json';
import './style/Ex02.css'
import MenuNav from './components/MenuNav';

const Ex02 = () => {
  // console.log(menuData);
    /* 
    카페 메뉴를 출력하는 웹 페이지 구현 실습

    menuData를 기존 배열로 map을 활용하여 진행
    전달할 값 => 이미지, 메뉴 이름, 메뉴 가격
    */

    // 필터링하여 보여줄 결과 state 값
    const [filterMenu, setFilterMenu] = useState(menuData);

    // 커피 메뉴만 필터링한 후 저장하는 배열 생성
    const coffeeList = menuData.filter(item=>item.category==='커피');
    //console.log(coffeeList);

    // 에이드, 디저트, 베이커리 배열 생성
    const adeList = menuData.filter(item=>item.category==='에이드');
    const dessertList = menuData.filter(item=>item.category==='디저트');
    const bakeryList = menuData.filter(item=>item.category==='베이커리');
    
    // 클릭시 해당 메뉴만 필터링하여 보여주는 함수
    const filterMenus = (e)=>{
      console.log(e.target.innerText);
      switch (e.target.innerText){
        case '커피' : setFilterMenu(coffeeList); break;
        case '디저트' : setFilterMenu(dessertList); break;
        case '에이드' : setFilterMenu(adeList); break;
        case '베이커리' : setFilterMenu(bakeryList); break;
        case 'All' : setFilterMenu(menuData); break;
      }
      console.log(filterMenu);
    }
    return (
    <div>
      <div className='menu-nav'>
        <MenuNav onClick={filterMenus}/>
      </div>
      <div className='menu-list'>
        {filterMenu.map((item) => (
          <MenuItem name={item.name} price={item.price}
          img={item.img} key={item.id}/>
        ))}
      </div>
    </div>
   )
  }

export default Ex02