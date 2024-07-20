import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.magicButton}>
          <Image src="/magic.svg" alt="Icon" className={styles.icon} width={50} height={50} />
          <p>Perpetual Trading is on its way</p>
        </div> */}
        <div className={styles.heroh1}>
          <h1>
            Maximize your NFTs potential <br />
            <span>without selling it!</span>
          </h1>
        </div>
        <div className={styles.heroh2}>
          <p>
            Your perpetual futures dex for NFTs and Cryptos
            {/* {isClient && (
              <span>
                <Typewriter
                  options={{
                    strings: ["NFTs", "Cryptos", "Real-World Assets"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            )} */}
          </p>
        </div>
        <div className={styles.heroTexts}>
          <div className={styles.heroText}>
            <Image
              src="https://defipe.b-cdn.net/fast.svg"
              alt="Fast Trading"
              className={styles.textIcon}
              width={50}
              height={50}
            />
            <p>Fast Trading</p>
          </div>
          <div className={styles.heroText}>
            <Image
              src="https://defipe.b-cdn.net/reliable.svg"
              alt="Secure & Reliable"
              className={styles.textIcon}
              width={50}
              height={50}
            />
            <p>Secure & Reliable</p>
          </div>
          <div className={styles.heroText}>
            <Image
              src="https://defipe.b-cdn.net/cont.svg"
              alt="Continuous Market Updates"
              className={styles.textIcon}
              width={50}
              height={50}
            />
            <p>Continuous Market Updates</p>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <button className={styles.button}>
            <Link
              href="https://test.defipe.io/"
              style={{ display: "flex", alignItems: "center", gap: "11px" }}
            >
              <Image
                src="https://defipe.b-cdn.net/fire.svg"
                alt="Button Icon 1"
                width={20}
                height={20}
              />
              Trade now
            </Link>
          </button>
          <button
            className={styles.button}
            onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}
          >
            <Image
              src="https://defipe.b-cdn.net/gift.svg"
              alt="Community"
              width={20}
              height={20}
            />
            Community
          </button>
        </div>
        <div className={styles.background}>
          <Image
            src="https://defipe.b-cdn.net/hero.svg"
            alt="Background"
            className={styles.backgroundImage}
            width={500}
            height={500}
          />
          <Image
            src="https://defipe.b-cdn.net/overlay1.svg"
            alt="Overlay Image"
            className={styles.overlayImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
