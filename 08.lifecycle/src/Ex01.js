import React, { useEffect } from 'react'

const Ex01 = () => {

  // 현재 위치(위도, 경도)를 가져오는 함수
  // position-> 현재 위치의 위도, 경도를 가져오는 변수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
        //console.log(position);

        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
    })
  }

  useEffect(()=>{
    // 위치정보 받아오기
    getCurrentLocation();
  },[])

  return (
    <div>Ex01</div>
  )
}

export default Ex01