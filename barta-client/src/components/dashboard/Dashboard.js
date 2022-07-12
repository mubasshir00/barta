import { styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../shared/utils/auth'
import { getActions } from '../../store/actions/authActions'
import AppBar from './AppBar/AppBar'
import FridendsSideBar from './FridendsSideBar/FridendsSideBar'
import Messenger from './Messenger/Messenger'
import SideBar from './SideBar/SideBar'

const Wrapper = styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})

function Dashboard({setUserDetails}) {
  useEffect(()=>{
    const userDetails = localStorage.getItem('user');
    if(!userDetails){
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  },[])
  return (
    <Wrapper>
      <SideBar/>
      <FridendsSideBar/>
      <Messenger/>
      <AppBar/>
    </Wrapper>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch),
  };
};

export default connect(null,mapActionsToProps)(Dashboard);