import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RegisterPageFooter from '../components/register/RegisterPageFooter';
import RegisterPageInput from '../components/register/RegisterPageInput';
import AuthBox from '../components/shared/AuthBox'
import { validateRegisterForm } from '../components/utils/validators';

const Register = () => {
  const [mail,setMail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [isFormValid,setIsFormValid] = useState(false);

  const handleRegister = () =>{
    console.log(mail);
    console.log(username);
    console.log(password);
    console.log("registering");
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

export default Register