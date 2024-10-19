import React from "react";
import styles from "../styles/feature.module.css";
import Image from "next/image";

export default function features() {
  return (
    <>
      <div className={styles.header}>
        <h2>Features</h2>
        <p>
          Empower your trading skills, whether you're a novice or a prothrough
          our streamlined platform offering a clean and accessible user
          interface.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          

          <Image src="https://defipe.b-cdn.net/f1.svg" alt="Image 1" width={500} height={500} />

          <h3>Self-custody with the gasless transaction</h3>
          <p>
            Only you have full control over your funds. Trade without the worry
            of gas fees.
          </p>
        </div>
        <div className={styles.card}>
          <Image src="https://defipe.b-cdn.net/f2.svg" alt="Image 2" width={500} height={500} />
          <h3>Many markets with Low Trading Fee</h3>
          <p>
            Trade on NFTs and Meme Coins as per your wish.
            With only Maker's 0.02% fee and Taker's 0.04% fee
          </p>
        </div>
        <div className={styles.card}>
          <Image src="https://defipe.b-cdn.net/f3.svg" alt="Image 3" width={500} height={500} />
          <h3>High-speed trading with deep liquidity</h3>
          <p>
          Experience fast transactions and high liquidity for a seamless trading.
          </p>
        </div>
        <div className={styles.card}>
          <Image src="https://defipe.b-cdn.net/f4.svg" alt="Image 4" width={500} height={500} />
          <h3>Fully decentralized and Open source</h3>
          <p>Secured by Zero Knowledge Proofs and Validium</p>
        </div>
      </div>

      <div className={styles.cardContainerMob}>
        <div className={styles.cardMob}>
          <Image src="https://defipe.b-cdn.net/f1.svg" alt="Image 1" width={500} height={500} />
          <h3>Self-custody with the gasless transaction</h3>
          <p>
            Only you have full control over your funds. Trade without the worry
            of gas fees.
          </p>
        </div>
        <div className={styles.cardMob}>
          <Image src="https://defipe.b-cdn.net/f2.svg" alt="Image 2" width={500} height={500} />
          <h3>Many markets with Low Trading Fee</h3>
          <p>
            Trade on crypto, Nfts, or any synthetic stocks as per your wish.
            With only Maker's 0.02% fee and Taker's 0.04% fee
          </p>
        </div>
        <div className={styles.cardMob}>
          <Image src="https://defipe.b-cdn.net/f3.svg" alt="Image 3" width={500} height={500} />
          <h3>High-speed trading with deep liquidity</h3>
          <p>
            Only you have full control over your funds. Trade without the worry
            of gas fees.
          </p>
        </div>
        <div className={styles.cardMob}>
          <Image src="https://defipe.b-cdn.net/f4.svg" alt="Image 4" width={500} height={500} />
          <h3>Fully decentralized and Open source</h3>
          <p>Secured by Zero Knowledge Proofs and Validium</p>
        </div>
      </div>
    </>
  );
}
