import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CustomPrimaryButton from '../shared/CustomPrimaryButton';
import InputWithLabels from '../shared/InputWithLabels';
import { validateMail } from '../utils/validators';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () =>{

    }
}) => {
  const [mail,setMail] = useState('');
  const [isFormValid,setIsFormValid] = useState('');
  const handleSendInvitation = () =>{
    //send friend request
  }
  const handleCloseDialog = () =>{
    closeDialogHandler();
    setMail('');
  }
  useEffect(()=>{
    setIsFormValid(validateMail(mail))
  },[mail,setIsFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite to Chat</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail / phone number / username</Typography>
          </DialogContentText>
          <InputWithLabels
            label="Mail"
            value={mail}
            setValue={setMail}
            placeholder="Entar mail , phone number , username"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton 
          onClick={handleSendInvitation} 
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            marginLeft:'15px',
            marginRight:'15px',
            marginBottom:'10px',
          }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog