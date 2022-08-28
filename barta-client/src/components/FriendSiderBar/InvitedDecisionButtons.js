import { CheckCircleOutline, Clear, ClearAllOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material'
import React from 'react'

const InvitedDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
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
        onClick={rejectInvitationHandler}
      >
        <Clear/>
      </IconButton>
    </Box>
  );
};

export default InvitedDecisionButtons