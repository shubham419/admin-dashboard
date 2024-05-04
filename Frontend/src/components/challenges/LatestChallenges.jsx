import React from 'react'
import TeamChallengeCard from './TeamChallengeCard'
import styles from "./Challenges.module.css"

function LatestChallenges() {
  return (
    <div className={styles.latestChallengesWrapper}>
        <p>Latest Team Challenge</p>
        <TeamChallengeCard team1="LA basketball" team2="Dallas basketball"/>
        <TeamChallengeCard team1="Miami basketball" team2="Houston soccer"/>
        <TeamChallengeCard team1="Dallas basketball" team2="LA soccer"/>
        <TeamChallengeCard team1="LA soccer" team2="Houston soccer"/>

    </div>
  )
}

export default LatestChallenges