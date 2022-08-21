import React from 'react'
import '../../styles/Dashboard.css'
import AddFriendButton from './AddFriendButton';
import FriendList from './FriendList';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './PendingInvitationsList';
const FriendSiderBar = () => {
  return <div className="friend_main_container">
    <AddFriendButton/>
    <FriendsTitle title='Private Message'/>
    <FriendList/>
    <FriendsTitle title="Invitations"/>
    <PendingInvitationsList/>
  </div>;
}

export default FriendSiderBar