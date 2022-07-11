import { Tooltip } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import RedirectInfo from '../../shared/RedirectInfo';
const getFormNotValidMessage = () => {
  return "Enter correct e-mail and password";
};
const getFormValidMessage = () => {
  return "Press to log in!";
};
const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useNavigate();
  const handlePushToLoginPage = () => {
    history("/register");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account ?"
        redirectText="Already have an account ?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter