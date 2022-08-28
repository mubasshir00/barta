import { Box, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import Avatar from '../shared/Avatar';
import InvitedDecisionButtons from './InvitedDecisionButtons';

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () =>{},
  rejectFriendInvitation = () =>{},
}) => {
  const [buttonsDisabled,setButtonDisabled] = useState(false);
  const handleAcceptInvitation = () =>{
    acceptFriendInvitation({id});
    setButtonDisabled(true);
  }
  const handleRejectInvitation = () =>{
    rejectFriendInvitation({id});
    setButtonDisabled(true);
  }
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitedDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitation={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

export default PendingInvitationsListItem