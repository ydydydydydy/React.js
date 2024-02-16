import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import { useState } from 'react';
import Mypage from './pages/Mypage';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import ProductDetail2 from './pages/ProductDetail2';

function App() {

  const [loginState, setLoginState] = useState(false);

  // 로그인 상태를 체크하여 해당 컴포넌트를 반환하는 함수
  // 로그인한 상태(true) : <MyPage/>
  // 비로그인 상태(false) : <Login/>
  const PrivateRoute = () => {
      return loginState ? <Mypage/> : <Navigate to="/login"/>

  }

  return (
    <div>
      <Routes>
        {/* 
          Route컴포넌트: 사용자의 요청 URL경로에 맞는 컴포넌트를 렌더링해주는 역할
          path속성: 요청URL경로
          element속성: 렌더링할 컴포넌트
        */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />

        {/* Product 페이지로 이동하는 Route 컴포넌트 생성해보기! */}
        <Route path='/product' element={<Product/>} />

        {/* useParams()를 사용할 때 아래와 같이 URL에 변수명 설정 */}
        <Route path='/product/:pro_no/:cate' element={<ProductDetail/>}/>

        {/* useSearchParams()를 사용할 때는 경로만 설정 */}
        <Route path='/productDetail2' element={<ProductDetail2/>}/>

        {/* 
          /mypage 요청이 들어왔을 때, PrivateRoute에서 로그인 상태를 체크하고
          그에 맞는 컴포넌트를 렌더링해주는 역할
        */}
        <Route path='/mypage' element={<PrivateRoute />}/>
        <Route path='/login' element={<Login setLoginState={setLoginState}/>} />

      </Routes>
    </div>
  );
}

export default App;
