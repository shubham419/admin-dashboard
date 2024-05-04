import React from "react";
import styles from "./Overview.module.css"

function Card({img, title, value, gradientBg}) {
  return (
    <div className={`${styles.card} ${styles.wrapper} ${gradientBg ? styles.gradientColor : null }`}>
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
      <img src={img} alt="graph"  />
    </div>
  );
}

export default Card;
