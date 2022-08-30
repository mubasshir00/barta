import React, { useEffect } from "react";
import { connect } from "react-redux";
import Appbar from "../components/AppBar/Appbar";
import FriendSiderBar from "../components/FriendSiderBar/FriendSiderBar";
import Messenger from "../components/Messenger/Messenger";
import SiderBar from "../components/SideBar/SiderBar";
import { logout } from "../components/utils/auth";
import { connectWithSocketServer } from "../socket_setup/socketConnection";
import { getActions, setUserDetails } from "../store/actions/authActions";
import "./../styles/Dashboard.css";

const Dashboard = ({setUserDetails}) => {
  useEffect(()=>{
    const userDetails = localStorage.getItem("user");
    if(!userDetails){
      // window.location.pathname = "login"
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  },[])
  return (
    <div className="dashboard_wrapper">
      <SiderBar />
      <FriendSiderBar />
      <Messenger />
      <Appbar/>
    </div>
  );
};

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch),
  }
}

export default connect(null,mapActionsToProps)(Dashboard);
