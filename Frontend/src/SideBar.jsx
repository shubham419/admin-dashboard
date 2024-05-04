import React from 'react'
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div>
        <Sidebar rootStyles={{height: "100%", backgroundColor: "white"}}>
        <Menu>
          <MenuItem component={<Link to={"/dashboard"}/>}>Dashboard</MenuItem>
          <MenuItem>Manage teams</MenuItem>
          <MenuItem>Manage users</MenuItem>
          <MenuItem>Transactions</MenuItem>
          <MenuItem>Reports</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar