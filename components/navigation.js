import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import HamMenu from "./hammenu";

export default function Navigation() {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          {" "}
          <img
            src="defipe-logo-1.png"
            alt="Defi Logo"
            className={styles.logo}
          />
        </Link>
       
        <div className={styles.navMiddle}>
          <Link href="/waitlist">Trade</Link>
          <a onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}>
            Join us
          </a>
          <a style={{ cursor: "not-allowed" }}>About us</a>
        </div>

        {/* <button className={styles.connectButton}>Join Waitlist</button> */}
        <Link href="/waitlist">
          {" "}
          <button className={styles.connectButton}>Join Waitlist</button>
        </Link>
      </div>

      <div className={styles.mobNavBar}>
        <Link href="/">
          {" "}
          <img
            src="defipe-logo-3.png"
            alt="Defi Logo"
            className={styles.logoMob}
          />
        </Link>

        <HamMenu></HamMenu>


     
      </div>
    </>
  );
}

//https://telegram.me/helloDefiPe
