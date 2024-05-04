import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomSideBar.module.css';

function CustomSideBar({selectedMenu}) {
  return (
    <div className={styles.customSideBar}>
      <div className={styles.logoText}>Logo Placeholder</div>
      <div className={styles.menuItems}>
        <Link
          to="/"
          className={`${styles.menuItem} ${selectedMenu == 'dashboard' ? styles.selectedMenuItem : ''}`}
        >
          Dashboard
        </Link>
        <Link
          to="/manage-teams"
          className={`${styles.menuItem} ${selectedMenu == 'manage-teams' ? styles.selectedMenuItem : ''}`}
        >
          Manage teams
        </Link>
        <Link to="/manage-users"
         className={`${styles.menuItem} ${selectedMenu == 'manage-users' ? styles.selectedMenuItem : ''}`}
        >Manage users</Link>
        <Link to="/placeholder" className={styles.menuItem}>Transactions</Link>
        <Link to="/placeholder" className={styles.menuItem}>Analysis</Link>
        <Link to="/placeholder" className={styles.menuItem}>Reports</Link>
        <Link to="/placeholder" className={styles.menuItem}>Settings</Link>
      </div>
    </div>
  );
}

export default CustomSideBar;
