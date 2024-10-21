import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/hero.module.css";
import Link from "next/link";
import Safari from "@/components/magicui/safari";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <a
          href="https://www.producthunt.com/posts/defipe-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-defipe&#0045;2"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=472178&theme=dark"
            alt="DefiPe - Get profit from NFTs without buying or selling them | Product Hunt"
            style={{ width: "15rem", height: "3rem", margin:"2.5rem auto 0.5rem auto" }}
            width="250"
            height="54"
          />
        </a>
        <div className={styles.heroh1}>
          <h1>
            Get profit from NFTs
            <br /> without
            <span> buying or selling</span>
            {/* Maximize your NFTs potential <br />
            <span>without selling it!</span> */}
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
          <RainbowButton>
            <Link
              href="https://test.defipe.io/trade/milady-eth"
              style={{ display: "flex", alignItems: "center", gap: "11px" }}
            >
              <Image
                src="https://defipe.b-cdn.net/fire.svg"
                alt="Button Icon 1"
                width={20}
                height={20}
              />
              Trade Now
            </Link>
            </RainbowButton>
          {/* <button
            className={styles.button}
            onClick={() => openInNewTab("https://telegram.me/helloDefiPe")}
          > */}
          
          {/* </button> */}
        </div>
        <div className={styles.background}>
          <Image
            src="https://defipe.b-cdn.net/hero.svg"
            alt="Background"
            className={styles.backgroundImage}
            width={500}
            height={500}
          />
    {/* <div className={styles.overlayImage}>
      <Safari
        url="magicui.design"
        className="size-full"
        src="https://via.placeholder.com/1200x750"
      />
    </div> */}
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
