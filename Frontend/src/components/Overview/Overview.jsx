import React from "react";
import Button from "@mui/material/Button";
import styles from "./Overview.module.css";
import LineGraph from "./LineGraph";
import Card from "./Card";

function Overview() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h3>Users Overview</h3>
          <Button variant="contained">+ Add Users</Button>
        </div>
        <div className={styles.divider} />
        <LineGraph />
      </div>
      <div className={styles.cardsSection}>
        <Card img="src/assets/ig_grapn.png" title="Total Teams" value="35" gradientBg />
        <Card img="src/assets/ig_bargraph_new.png" title="Total Captain" value="30" />
        <Card img="src/assets/ig_grapn.png" title="Total User" value="300"/>
        <Card img="src/assets/ig_bargraph_new.png" title="Total Sale" value="$ 4320"/>
      </div>

    </>
  );
}

export default Overview;
