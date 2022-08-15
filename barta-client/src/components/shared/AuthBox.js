import { Box } from '@mui/material'
import React from 'react'
import './../../styles/AuthBox.css'
const AuthBox = (props) => {
  return (
    <div className='boxwrapper'>
        <Box sx={{
            width:700,
            height:400,
            bgcolor:'#36393f',
            borderRadius:"5px",
            boxShadow:"0 2px 10px 0 rgba(0 0 0 /20%)",
            display:'flex',
            flexDirection:'column',
            padding:"25px"
        }}>
            {props.children}
        </Box>
    </div>
  )
}

export default AuthBox