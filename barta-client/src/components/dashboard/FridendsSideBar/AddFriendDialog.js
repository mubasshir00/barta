import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CustomPrimaryButton from '../../../shared/CustomPrimaryButton';
import InputWithLabel from '../../../shared/InputWithLabel';
import { validateMail } from '../../../shared/utils/validators';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () =>{

    }
}) => {
  const [mail,setMail] = useState('');
  const [isFormValid,setIsFormValid] = useState('');
  const handleSendInvitation = () =>{

  }
  const handleCloseDialog = () =>{
    closeDialogHandler();
    setMail('');
  }
  useEffect(()=>{
    setIsFormValid(validateMail(mail));
  },[mail,setIsFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <DialogContentText>
            <Typography>Invite a Friend</Typography>
          </DialogContentText>
        </DialogTitle>
        <DialogContent>
          <Typography>Invite your friend</Typography>
          <InputWithLabel
            label="Email"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
            <CustomPrimaryButton onClick={handleSendInvitation} disabled={!isFormValid} label="Send" additionalStyles={{
                marginLeft:"15px",
                marginRight:"15px",
                marginBottom:"10px"
            }}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog