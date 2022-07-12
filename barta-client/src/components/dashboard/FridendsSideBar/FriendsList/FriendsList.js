import { styled } from '@mui/material'
import React from 'react'
import FriendsListItem from './FriendsListItem';

const temp_friends = [
  {
    id: 1,
    username: "a",
    isOnline: true,
  },
  {
    id: 2,
    username: "a",
    isOnline: true,
  },
  {
    id: 3,
    username: "a",
    isOnline: true,
  },
];

const MainContainer = styled('div')({
    flexGrow:1,
    width:'100%'
})

const FriendsList = () => {
  return (
    <MainContainer>
      {
        temp_friends.map((i)=>(
          <FriendsListItem username={i.username} id={i.id} isOnline={i.isOnline}/>
        ))
      }
    </MainContainer>
  )
}

export default FriendsList