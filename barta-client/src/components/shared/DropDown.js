import React from 'react'
import { logout } from '../utils/auth';
import './DropDOwn.css'
const DropDown = () => {
  return (
    <div>
      <button onClick={logout} class="custom-btn btn-1">Log Out</button>
    </div>
  );
}

export default DropDown