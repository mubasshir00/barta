import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { getActions } from '../store/actions/alertActions'

const AlertNotification = ({showAlertMessage,closeAlertMessage,alertMessageContent}) => {
    console.log({showAlertMessage});
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={() => {}}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
}

const mapStoreStateToProps = ({alert}) =>{
    return {
        ...alert,

    }
}

const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch),
    }
}

export default connect(mapStoreStateToProps,mapActionsToProps)(AlertNotification);