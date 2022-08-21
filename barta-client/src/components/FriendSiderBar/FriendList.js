import React from 'react'
import FriendListItem from './FriendListItem';

const dummy_friends = [
  {
    id: 1,
    username: "Mark",
    isOnline: true,
  },
  {
    id: 2,
    username: "Anne",
    isOnline: true,
  },
  {
    id: 3,
    username: "CHan",
    isOnline: true,
  },
];

const FriendList = () => {
  return (
    <div className='friendlist_main_container'>
        {
          dummy_friends.map((i)=>(
            <FriendListItem username={i.username} id={i.id} key={i.id} isOnline={i.isOnline}/>
          ))
        }
    </div>
  )
}

export default FriendList