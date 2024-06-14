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
      <nav className={styles.navbar}>
        <Link href="/">
          {" "}
          <img
            src="defipe-logo-1.png"
            alt="Defi Logo"
            className={styles.logo}
          />
        </Link>
       
        <div className={styles.navMiddle}>
          <Link href="https://test.defipe.io/">Trade</Link>
          <Link href="https://blog.defipe.io/">
           Blogs
          </Link>
          <a style={{ cursor: "not-allowed" }}>About us</a>
        </div>

        {/* <button className={styles.connectButton}>Join Waitlist</button> */}
        <Link href="https://test.defipe.io/">
          {" "}
          <button className={styles.connectButton}>Launch app</button>
        </Link>
      </nav>

      <nav className={styles.mobNavBar}>
        <Link href="/">
          {" "}
          <img
            src="defipe-logo-3.png"
            alt="Defi Logo"
            className={styles.logoMob}
          />
        </Link>

        <HamMenu></HamMenu>


     
      </nav>
    </>
  );
}

