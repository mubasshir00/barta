import React from "react";
import Appbar from "../components/AppBar/Appbar";
import FriendSiderBar from "../components/FriendSiderBar/FriendSiderBar";
import Messenger from "../components/Messenger/Messenger";
import SiderBar from "../components/SideBar/SiderBar";
import "./../styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard_wrapper">
      <SiderBar />
      <FriendSiderBar />
      <Messenger />
      {/* <Appbar/> */}
    </div>
  );
};

export default Dashboard;
