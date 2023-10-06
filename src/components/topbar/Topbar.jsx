import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import profilePic from './2.jpg'
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">wizard:pro:tech</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={profilePic} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  )
}

export default Topbar; 