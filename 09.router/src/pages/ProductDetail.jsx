import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  // url에 있는 데이터를 가져오는 방법
  // useParams()는 URL 파라미터 방식으로 전달받은 값을 가져올 때 사용하는 함수
  //  - 객체 형태로 반환
  //    const params = useParams();
  //    console.log('Product에서 넘겨받은 값:', params);

  const {pro_no} = useParams();

  return (
    <div>ProductDetail: {pro_no}</div>
  )
}

export default ProductDetail