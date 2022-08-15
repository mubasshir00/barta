import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import './../../styles/RedirectInfo.css'

const RedirectInfo = ({
    text,redirectText,additionalStyles,redirectHandler
}) => {
  return (
    <Typography sx={{color:"#72767d"}} style={additionalStyles ? additionalStyles :{

    }} variant="subtitle2">
        {text}
        <div onClick={redirectHandler} className='span'>
            {redirectText}
        </div>
    </Typography>
  )
}

export default RedirectInfo