import { GroupsOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const MainPageButton = () => {
  return (
    <Button 
    style={{
        width:'48px',
        height:'48px',
        borderRadius:'16px',
        margin:0,
        padding:0,
        minWidth:0,
        marginTop:'10px',
        color:'white',
        backgroundColor:'#5865F2'
    }}
    >
        <GroupsOutlined/>
    </Button>
  )
}

export default MainPageButton