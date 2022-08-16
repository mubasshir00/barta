import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginPageFooter from '../components/login/LoginPageFooter'
import LoginPageHeader from '../components/login/LoginPageHeader'
import LoginPageInput from '../components/login/LoginPageInput'
import AuthBox from '../components/shared/AuthBox'
import { validateLoginForm } from '../components/utils/validators'
import { getActions } from '../store/actions/authActions'

const Login = ({login}) => {
  const history = useNavigate();
  const [mail,setMail] = useState("");
  const [password,setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}));
  })

  const handleLogin = () =>{
    const userDetails = {
      email : mail,
      password : password
    };
    login(userDetails,history);
  }

  return (
    <AuthBox>
        <LoginPageHeader/>
        <LoginPageInput mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null,mapActionsToProps)(Login);