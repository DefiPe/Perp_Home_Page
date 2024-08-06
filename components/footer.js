import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <footer className={styles.footerDiv}>
        <div className={styles.footer}>
          <div className={styles.footerLogoBox}>
            <Image
              src="/defipe-logo-1.png"
              alt="Defi Logo"
              width={100}
              height={50}
            />
            {/* <p>
              Trade whatever you like,
              <br /> whatever you want...
            </p> */}
            <div className={styles.socialIcons}>
              <Image
                src="https://defipe.b-cdn.net/LinkedIn.svg"
                alt="LinkedIn icon"
                width={24}
                height={24}
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/company/defipe-io/")
                }
              />
              <Image
                src="https://defipe.b-cdn.net/Instagram.svg"
                alt="Instagram icon"
                width={24}
                height={24}
                onClick={() =>
                  openInNewTab("https://www.instagram.com/defipeio/")
                }
              />
              <Image
                src="https://defipe.b-cdn.net/Twitter.svg"
                alt="Twitter icon"
                width={24}
                height={24}
                onClick={() => openInNewTab("https://twitter.com/defipeio")}
              />
              <Image
                src="https://defipe.b-cdn.net/youtube.svg"
                alt="youtube icon"
                width={24}
                height={24}
                onClick={() => openInNewTab("https://www.youtube.com/@DefiPe")}
              />
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Company</h4>
            <Link href="https://test.defipe.io/" rel="noopener noreferrer" target="_blank"> Trade</Link>
            <Link href="https://blog.defipe.io/" rel="noopener noreferrer" target="_blank"> Blog</Link>
            <Link href="#faq">FAQ's</Link>
          </div>

          <div className={styles.footerSection}>
            <h4>About</h4>
            <a>Privacy Policy</a>
            <a>Help Center</a>
            <a>Community</a>
          </div>
        </div>
      </footer>

      <div
        style={{
          height: "1px",
          width: "85%",
          backgroundColor: "rgb(18, 18, 18)",
          margin: "auto",
        }}
      ></div>
      <div className={styles.bottomFooter}>
        <p>Copyright © 2024 DefiPe</p>
      </div>
    </>
  );
};

export default Footer;
