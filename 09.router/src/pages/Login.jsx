import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoginState}) => {

  const navigate = useNavigate();

  const goToHome = ()=> {
    setLoginState(true);
    navigate('/');
  }

  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={goToHome}>login</button>
    </div>
  )
}

export default Login