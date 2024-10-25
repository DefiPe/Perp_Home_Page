import React from "react";
import styles from "../styles/feature.module.css";

export default function Features() {
  return (
   <>
   <div className={styles.header}>
    <h1>Magical features to help you to<br/> Trade to next Level</h1>
   </div>
    <div className={styles.gridContainer}>
      <div className={`${styles.gridItem} ${styles.item1}`}>
        <img src="/grid0.svg" alt="Item 1" className={styles.gridImage} />
      </div>
      <div className={`${styles.gridItem} ${styles.item2}`}>
        <img src="/grid2.svg" alt="Item 2" className={styles.gridImage} />
      </div>
      <div className={`${styles.gridItem} ${styles.item3}`}>
        <img src="/grid4.svg" alt="Item 3" className={styles.gridImage} />
      </div>
      <div className={`${styles.gridItem} ${styles.item4}`}>
        <img src="/grid5.svg" alt="Item 4" className={styles.gridImage} />
      </div>
      <div className={`${styles.gridItem} ${styles.item5}`}>
        <img src="/grid8.svg" alt="Item 5" className={styles.gridImage} />
      </div>
    </div>
    </>
  );
}
