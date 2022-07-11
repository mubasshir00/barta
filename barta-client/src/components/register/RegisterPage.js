import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthBox from '../../shared/AuthBox';
import { validateRegisterForm } from '../../shared/utils/validators';
import { getActions } from '../../store/actions/authActions';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInput from './RegisterPageInput';

const RegisterPage = ({register}) => {

  const history = useNavigate();

  const [mail,setMail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const [isFormValid,setIsFormValid] = useState(false);
  const handleRegister = () =>{
    const userDetails = {
      mail,
      password,
      username
    }
    register(userDetails,history)
  };

  useEffect(()=>{
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password
      })
    );

  },[mail,username,password,setIsFormValid]);
  return (
    <AuthBox>
      <Typography variant='5' sx={{color:"white"}}>
        Create an account
      </Typography>
      <RegisterPageInput mail={mail} setMail={setMail} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
      <RegisterPageFooter handleRegister={handleRegister} isFormValid={isFormValid}/>
    </AuthBox>
  )
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null,mapActionsToProps)(RegisterPage);