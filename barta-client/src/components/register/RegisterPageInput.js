import React from 'react'
import InputWithLabel from '../../shared/InputWithLabel';

const RegisterPageInput = (props) => {
    const {mail,setMail,username,setUsername,password,setPassword} = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="text"
        placeholder="Enter password"
      />
    </>
  );
}

export default RegisterPageInput