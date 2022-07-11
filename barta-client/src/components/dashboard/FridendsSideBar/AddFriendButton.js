import React from 'react'
import { useState } from 'react'
import CustomPrimaryButton from '../../../shared/CustomPrimaryButton'
import AddFriendDialog from './AddFriendDialog'

const additionalStyles = {
    marginTop: '10px',
    marginLeft:'5px',
    width:'80%',
    height:'30px',
    background:'#3ba55d'
}

const AddFriendButton = () => {
  const [isDialogOpen,setIsDialogOpen] = useState(false);
  const handleOpenAddFriendDIalog = () =>{
    setIsDialogOpen(true);
  }
  const handleCloseAddFriendDIalog = () =>{
    setIsDialogOpen(false);
  }
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDIalog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDIalog}
      />
    </>
  );
}

export default AddFriendButton