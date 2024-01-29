import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Upload from "./Upload";

const Dashboard = ({ onLogout }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const navigateTo = (path) => {
    switch (path) {
      case "/upload":
        return <Upload />;
      default:
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="hamburger-menu" onClick={toggleSideMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="navbar-right">
          <button className="logout-button" onClick={onLogout}>Logout</button>
        </div>
      </nav>
      {isSideMenuOpen && <SideMenu onNavigate={navigateTo} />}
    </div>
  );
};

export default Dashboard;
