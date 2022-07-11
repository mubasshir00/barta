import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthBox from '../../shared/AuthBox'
import { validateLoginForm } from '../../shared/utils/validators'
import { getActions } from '../../store/actions/authActions'
import LoginPageFooter from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput';

const LoginPage = ({login}) => {
  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  const [isFormValid,setIsFormValid] = useState(false);

  const history = useNavigate();

  useEffect(()=>{
    setIsFormValid(validateLoginForm({mail,password}));
  },[mail,password,setIsFormValid])

  const handleLogin = () =>{
    const userDetails = {
      mail,password
    }
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
    ...getActions(dispatch),
  }
}

export default connect(null,mapActionsToProps)(LoginPage);