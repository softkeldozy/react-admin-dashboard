import React from 'react';
import './Sidebar.css';
import CottageIcon from '@mui/icons-material/Cottage';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <CottageIcon className='sideBarIcons' />
              Home
            </li>
            <li className="sidebarListItem">
              <CandlestickChartIcon className='sideBarIcons' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon className='sideBarIcons' />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PeopleIcon />
              Users
            </li>
            <li className="sidebarListItem">
              <InventoryIcon />
              Products
            </li>
            <li className="sidebarListItem">
              <ReceiptLongIcon />
              Transactions
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon />
              Report
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon />
              Feedforward
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon />
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CottageIcon />
              Manage
            </li>
            <li className="sidebarListItem">
              <CandlestickChartIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Report
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profile</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CottageIcon />
              Home
            </li>
            <li className="sidebarListItem">
              <CandlestickChartIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar