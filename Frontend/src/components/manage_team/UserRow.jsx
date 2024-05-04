import React from 'react';
import styles from './TeamRow.module.css';

function UserRow({ user }) {
  const { userName, userType, joiningDate, email, phoneNumber, city } = user;

  return (
    <tr className={styles.teamRow}>
      <td>{userName}</td>
      <td>{userType}</td>
      <td>{joiningDate}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{city}</td>
      <td>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>Delete</button>
      </td>
    </tr>
  );
}

export default UserRow;
