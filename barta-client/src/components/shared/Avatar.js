import React from 'react'
import './Avatar.css'
const Avatar = ({username,large}) => {
  return <div className="avatar_container">{username.substring(0,2)}</div>;
}

export default Avatar