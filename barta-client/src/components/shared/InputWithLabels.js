import { Input } from '@mui/material';
import React from 'react'
import './../../styles/InputWithLabels.css'
const InputWithLabels = (props) => {
  const {value,setValue,label,type,placeholder} = props;
  const handleValueChange = (e) =>{
    setValue(e.target.value)
  }
  return (
    <div className="wrapper">
      <div className="label">{label}</div>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputWithLabels