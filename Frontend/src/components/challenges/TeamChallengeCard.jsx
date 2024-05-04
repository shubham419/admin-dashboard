import React from "react";
import styles from "./Challenges.module.css";

function TeamChallengeCard({team1, team2}) {
  return (
    <>
      <div className={styles.teamChallengeCard}>
        <img
          src="src/assets/ig_sco.jpeg"
          alt="teamname"
          height={34}
          width={34}
        />
        <h3>{team1}</h3>
        <p>Challenged</p>
        <h3>{team2}</h3>
      </div>
      <div className={styles.divider} />
    </>
  );
}

export default TeamChallengeCard;
