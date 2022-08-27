import { Box } from '@mui/material'
import React from 'react'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
const OnlineIndicator = () => {
  return (
    <Box sx={{
        color:"#5ba55d",
        display:'flex',
        alignItems:'center',
        position:'absolute',
        right:'5px'
    }}>
        <OnlinePredictionIcon/>
    </Box>
  )
}

export default OnlineIndicator