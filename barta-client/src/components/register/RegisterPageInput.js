import React from 'react'
import InputWithLabels from '../shared/InputWithLabels'

const RegisterPageInput = (props) => {
   const {mail,setMail,username,setUsername,password,setPassword} = props
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabels
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
}

export default RegisterPageInput