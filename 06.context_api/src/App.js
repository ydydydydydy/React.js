import { useState } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import Page from './page/Page';

function App() {

  // 각 컴포넌트에서 공통적으로 사용하는 state를 정의
  const [isDark, setIsDark] = useState(false)

  // Header, Content 컴포넌트에서 user state를 사용할 수 있도록 구현해보기(Context 활용)
  const [user, setUser] = useState("summer")
  return (
      <ThemeContext.Provider value={{isDark, setIsDark, user}}>
        <Page/>
      </ThemeContext.Provider>
  );
}

export default App;
