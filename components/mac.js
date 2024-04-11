import React from "react";
import styles from '../styles/mac.module.css';

export default function Mac() {
  return (
    <>
      <div className={styles.header}><p>Trade with ease</p></div>
      <div className={styles.para}><p>Empower your trading skills, whether you're a novice or a prothrough our streamlined<br/> platform offering a clean and accessible user interface.</p></div>
      <img src="macpro.svg" alt="" className={styles.macbook} />
      <div className={styles.iconHeader}><p>Trade on 100+ DEXs at the same time</p>
      </div>
      <div className={styles.imgContainer}>
      <div className={styles.icons}><img src="eth.svg"/></div>
      <div className={styles.icons}><img src="poly.svg"/></div>
      <div className={styles.icons}><img src="bin.svg"/></div>
      <div className={styles.icons}><img src="opt.svg"/></div>
      </div>

    </>
  );
}
