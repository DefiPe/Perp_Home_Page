import React from "react";
import styles from '../styles/roadmap.module.css';

export default function Roadmap() {
  return (
    <>
      <div className={styles.head}>
        <h3>Roadmap</h3>
        <p>Empower your trading skills, whether you're a novice or a pro through our streamlined platform offering a clean and accessible user interface.</p>
      </div>
      <div className={styles.content}>
        <img src="bg2.svg"></img>
        <div className={styles.verticalLine}></div>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.left1}`}>
            <h4>Q4 2023</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.right1}`}>
            <h4>Q1 2021</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.left2}`}>
            <h4>Q2 2022</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.right2}`}>
            <h4>Q3 2023</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
