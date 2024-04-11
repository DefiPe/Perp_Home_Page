import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import HamMenu from "./hammenu";

export default function Navigation() {
  return (
    <>
      <div className={styles.navbar}>
        <img src="defipe-logo-1.png" alt="Defi Logo" className={styles.logo}/>
        <div className={styles.navMiddle}>
          <Link href="/waitlist">Trade</Link>
          <a>Join us</a>
          <a style={{ cursor: "not-allowed" }}>About us</a>
        </div>

        {/* <button className={styles.connectButton}>Join Waitlist</button> */}
        <Link href="/waitlist">
          {" "}
          <button className={styles.connectButton}>Join Waitlist</button>
        </Link>
      </div>

      <div className={styles.mobNavBar} >
        <img src="defipe-logo-3.png" alt="Defi Logo" className={styles.logoMob}/>
        <HamMenu></HamMenu>
      </div>
    </>
  );
}
