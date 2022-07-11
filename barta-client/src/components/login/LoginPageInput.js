import React from 'react'
import InputWithLabel from '../../shared/InputWithLabel'

const LoginPageInput = ({mail,setMail,password,setPassword}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter Email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
}

export default LoginPageInput