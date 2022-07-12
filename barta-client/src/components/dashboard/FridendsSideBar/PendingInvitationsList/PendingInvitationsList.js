import { styled } from '@mui/material'
import React from 'react'
import PendingInvitationsListItem from './PendingInvitationsListItem';

const MainContainer = styled('div')({
    width:'100%',
    height:'22%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})

const temp_invitations = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      mail: "test@gmail.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Test",
      mail: "test@gmail.com",
    },
  },
  {
    _id: "3",
    senderId: {
      username: "Test 3",
      mail: "test@gmail.com",
    },
  },
];

const PendingInvitationsList = () => {
  return (
    <MainContainer>
        {
          temp_invitations.map(invitation =>(
            <PendingInvitationsListItem key={invitation._id} id={invitation._id} username={invitation.senderId.username} mail={invitation.senderId.mail}/>
          ))
        }
    </MainContainer>
  )
}

export default PendingInvitationsList