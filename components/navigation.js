import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import HamMenu from "./hammenu";
import Text from "@carefully-coded/react-text-gradient";
import Image from "next/image";

export default function Navigation() {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
    <div className={styles.productHunt}>
          <div className={styles.header}>
            <h3>We are launching on product hunt on 9th Aug 🚀 </h3>
          </div>
    </div>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            src="/defipe-logo-1.png"
            alt="Defi Logo"
            className={styles.logo}
            width={100} // Adjust the width according to your needs
            height={50} // Adjust the height according to your needs
          />
        </Link>
       
        <div className={styles.navMiddle}>
          <Link href="https://test.defipe.io/">Trade</Link>
          <Link href="https://blog.defipe.io/">Blogs</Link>
          <Text 
            gradient={{ from: '#a1ff0a', to: '#ff6000' }} 
            animateTo={{ to: '#bc00dd', from: '#6a00f4' }} 
            animationDuration={4000}
            className={styles.navText}
          >
            <Link href="/airdrop">AirDrop</Link>
          </Text>
        </div>
        {/* <button className={styles.connectButton}>Join Waitlist</button> */}
        <Link href="https://test.defipe.io/">
          <button className={styles.connectButton}>Launch app</button>
        </Link>
      </nav>

      <nav className={styles.mobNavBar}>
        <Link href="/">
          <Image
            src="/defipe-logo-3.png"
            alt="Defi Logo"
            className={styles.logoMob}
            width={100} // Adjust the width according to your needs
            height={50} // Adjust the height according to your needs
          />
        </Link>

        <HamMenu />
      </nav>
    </>
  );
}
