import { FiberManualRecord } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const OnlineIndicator = () => {
  return (
    <Box sx={{
        color:"#3ba55d",
        display:"flex",
        alignItems:'center',
        position:'absolute',
        right:'5px'
    }}>
        <FiberManualRecord/>
    </Box>
  )
}

export default OnlineIndicator