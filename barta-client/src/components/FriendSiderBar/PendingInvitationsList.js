import React from 'react'
import PendingInvitationsListItem from './PendingInvitationsListItem';

const DUMMY_INVITATIONS = [
  {
    _id: "1",
    senderId: {
      username: "MM",
      mail: "Dummy@gmail.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "MM",
      mail: "Dummy@gmail.com",
    },
  },
  {
    _id: "3",
    senderId: {
      username: "MM",
      mail: "Dummy@gmail.com",
    },
  },
];

const PendingInvitationsList = () => {
  return (
    <div className='pending_invitation_list'>
      {DUMMY_INVITATIONS.map((invitation =>(
        <PendingInvitationsListItem 
        key={invitation._id}
        _id={invitation._id}
        username={invitation.senderId.username}
        mail={invitation.senderId.mail}
        />
      )))}
    </div>
  )
}

export default PendingInvitationsList