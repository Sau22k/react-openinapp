import React from "react";

const SideMenu = ({ onNavigate }) => {
  return (
    <div className="side-menu">
      <button onClick={() => onNavigate("/dashboard")}>Dashboard</button>
      <button onClick={() => onNavigate("/upload")}>Upload</button>
      <button onClick={() => onNavigate("/invoice")}>Invoice</button>
      <button onClick={() => onNavigate("/schedule")}>Schedule</button>
      <button onClick={() => onNavigate("/calendar")}>Calendar</button>
      <button onClick={() => onNavigate("/notification")}>Notification</button>
      <button onClick={() => onNavigate("/setting")}>Setting</button>
    </div>
  );
};

export default SideMenu;
