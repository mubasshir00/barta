import { CheckCircleOutline, ClearAll, Close } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React from 'react'

const InvitationDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectFriendInvitation,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckCircleOutline />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectFriendInvitation}
      >
        <Close />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons