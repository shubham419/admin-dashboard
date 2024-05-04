import React from 'react';
import styles from './TeamRow.module.css';

function TeamRow({ team }) {
  const { name, createDate, membersCount, city, captain } = team;

  return (
    <tr className={styles.teamRow}>
      <td>{name}</td>
      <td>{createDate}</td>
      <td>{membersCount}</td>
      <td>{city}</td>
      <td>{captain}</td>
      <td>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>Delete</button>
      </td>
    </tr>
  );
}

export default TeamRow;
