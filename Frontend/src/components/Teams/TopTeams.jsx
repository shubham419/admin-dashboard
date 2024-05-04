import React from 'react'
import styles from './Teams.module.css'
import RadarGraph from './RadarGraph'

function TopTeams() {
  return (
    <div className={styles.wrapper}>
        <p>Top Teams</p>
        <RadarGraph/>
    </div>
  )
}

export default TopTeams