import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterPageFooter from '../components/register/RegisterPageFooter';
import RegisterPageInput from '../components/register/RegisterPageInput';
import AuthBox from '../components/shared/AuthBox'
import { validateRegisterForm } from '../components/utils/validators';
import { getActions } from '../store/actions/authActions';

const Register = ({register}) => {
  const history = useNavigate();
  const [mail,setMail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [isFormValid,setIsFormValid] = useState(false);

  const handleRegister = () =>{

    const userDatils = {
      email:mail,
      password : password,
      username :username
    }
    register(userDatils,history);
  }

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({
      mail,username,password
    }))
  },[mail,username,password,setIsFormValid])

  return (
    <AuthBox>
      <Typography variant="5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Register);