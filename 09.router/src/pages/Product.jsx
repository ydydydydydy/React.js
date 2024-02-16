import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate()

  const goToProductDetail = () => {
    // URL 파라미터 방식
    navigate('/product/1/pants')
  }

  const goToProductDetail2 = () => {
    // 쿼리스트링 방식
    navigate('/productDetail2?pro_no=1&cate=pants')
  }

  return (
    <div>
      <h1>Product</h1>
      <button onClick={goToProductDetail}>상품 상세페이지로 이동</button>
      <button onClick={goToProductDetail2}>상품 상세페이지2로 이동</button>
    </div>
  ) 
}

export default Product