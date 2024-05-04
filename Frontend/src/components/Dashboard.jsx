import React from "react";
import Header from "./header/Header";
import Overview from "./Overview/Overview";
import TopTeams from "./Teams/TopTeams";
import LatestChallenges from "./challenges/LatestChallenges";
import styles from "./Dashboard.module.css";
import SideBar from "../SideBar";
import CustomSideBar from "./CustomSideBar/CustomSideBar";

function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <CustomSideBar selectedMenu="dashboard" />
    <div className={styles.contentWrapper}>
      <Header />
      <div style={{height:70}}/>
      <Overview />
      <div className={styles.teamChallenges}>
        <TopTeams />
        <LatestChallenges />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
