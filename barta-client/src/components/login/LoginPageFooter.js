import { Tooltip } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton'
import RedirectInfo from '../../shared/RedirectInfo';

const getFormNotValidMessage = () =>{
    return 'Enter correct e-mail and password'
}
const getFormValidMessage = () =>{
    return 'Press to log in!'
}
const LoginPageFooter = ({handleLogin,isFormValid}) => {
  const history = useNavigate();
  const handlePushToRegisterPage = () =>{
    history('/register')
  }
  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account ?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
}

export default LoginPageFooter