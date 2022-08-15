import React from 'react'
import InputWithLabels from '../shared/InputWithLabels'

const LoginPageInput = ({mail,setMail,password,setPassword}) => {
  return (
    <>
      <InputWithLabels
        value = {mail}
        setValue ={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail"
      />
    </>
  );
}

export default LoginPageInput