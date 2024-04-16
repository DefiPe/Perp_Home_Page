import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <footer
        className={styles.footerDiv}
      >
        <div className={styles.footer}>
          <div className={styles.footerLogoBox}>
            <img src="defipe-logo-1.png" alt="Defi Logo" />
            <p>
              Trade whatever you like,
              <br /> whatever you want...
            </p>
            <div className={styles.socialIcons}>
              <img
                src="https://defipe.b-cdn.net/LinkedIn.svg"
                alt="LinkedIn icon"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/company/defipe-io/")
                }
              />
              <img
                src="https://defipe.b-cdn.net/Instagram.svg"
                alt="Instagram icon"
                onClick={() =>
                  openInNewTab("https://www.instagram.com/defipeio/")
                }
              />
              <img
                src="https://defipe.b-cdn.net/Twitter.svg"
                alt="Twitter icon"
                onClick={() => openInNewTab("https://twitter.com/defipeio")}
              />
              <img
                src="https://defipe.b-cdn.net/youtube.svg"
                alt="youtube icon"
                onClick={() => openInNewTab("https://www.youtube.com/@DefiPe")}
              />
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Company</h4>

            <a>Trade</a>
            <a>About Us</a>
            <a>Blog</a>
            <a>FAQ's</a>
          </div>

          <div className={styles.footerSection}>
            <h4>About</h4>

            <a>Privacy Policy</a>
            <a>Help Center</a>
            <a>Community</a>
          </div>
        </div>
        
      </footer>

      <div style={{height:"1px", width:"95%", backgroundColor:"#EFF0F6", margin:"auto"}}></div>
      <div className={styles.bottomFooter}>
        <p>Copyright © 2024 DefiPe</p>
      </div>
    </>
  );
};

export default Footer;
