import React from "react";
import styles from '../styles/market.module.css';
import Marquee from "react-fast-marquee";

const Market = () => {
  const cardData = {
    symbol: "Dropbox",
    price: 61990,
    change: 4.91,
    volume: 927240,
  };

  return (
    <>
      <div className={styles.head}>
        <h3>Markets</h3>
        <p>Empower your trading skills, whether you're a novice or a pro through our streamlined platform offering a clean and accessible user interface.</p>
      </div>
      <div className={styles.cardContainer}>
        <Marquee>
          <div className={styles.card}>
            <img src="/logo1.png" alt="Logo 1" className={styles.logo} />
            <div className={styles.content}>
              <h4>Heading 1</h4>
              <p>Rate: $100</p>
              <p>+5.00 (10%)</p>
              <p>Volume: 1000</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/logo2.png" alt="Logo 2" className={styles.logo} />
            <div className={styles.content}>
              <h4>Heading 2</h4>
              <p>Rate: $200</p>
              <p>+10.00 (5%)</p>
              <p>Volume: 2000</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/logo3.png" alt="Logo 3" className={styles.logo} />
            <div className={styles.content}>
              <h4>Heading 3</h4>
              <p>Rate: $150</p>
              <p>+7.50 (8%)</p>
              <p>Volume: 1500</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/logo4.png" alt="Logo 4" className={styles.logo} />
            <div className={styles.content}>
              <h4>Heading 4</h4>
              <p>Rate: $300</p>
              <p>+15.00 (12%)</p>
              <p>Volume: 3000</p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Market;
