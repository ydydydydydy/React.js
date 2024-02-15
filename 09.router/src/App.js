import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
