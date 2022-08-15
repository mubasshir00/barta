import React, { useEffect, useState } from 'react'
import LoginPageFooter from '../components/login/LoginPageFooter'
import LoginPageHeader from '../components/login/LoginPageHeader'
import LoginPageInput from '../components/login/LoginPageInput'
import AuthBox from '../components/shared/AuthBox'
import { validateLoginForm } from '../components/utils/validators'

const Login = () => {
  const [mail,setMail] = useState("");
  const [password,setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}));
  })

  const handleLogin = () =>{
    console.log('Login In');
  }

  return (
    <AuthBox>
        <LoginPageHeader/>
        <LoginPageInput mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default Login