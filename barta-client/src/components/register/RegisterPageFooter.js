import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import RedirectInfo from "../shared/RedirectInfo";

const getFormNotValidMessage = () => {
  return "Enter correct information";
};

const getFormValidMessage = () => {
  return "Press to Register";
};

const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
  const history = useNavigate();
  const handlePushToLoginPage = () => {
    history("/");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{
              marginTop: "30px",
              color: "white",
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
