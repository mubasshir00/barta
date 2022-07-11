import { styled } from '@mui/material'
import React from 'react'
import AppBar from './AppBar/AppBar'
import FridendsSideBar from './FridendsSideBar/FridendsSideBar'
import Messenger from './Messenger/Messenger'
import SideBar from './SideBar/SideBar'

const Wrapper = styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})

function Dashboard() {
  return (
    <Wrapper>
      <SideBar/>
      <FridendsSideBar/>
      <Messenger/>
      <AppBar/>
    </Wrapper>
  )
}

export default Dashboard