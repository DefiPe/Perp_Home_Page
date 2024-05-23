"use client";

import { cn } from "@/@";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
// import { IconProps } from "@radix-ui/react-icons/dist/types";
import React, { forwardRef, useRef } from "react";
import styles from "@/styles/animated.module.css";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-darkgrey p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedDiv() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.header}>
      <h3>Multi-chain support</h3>
    
    <div className={styles.main}>
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg bg-black p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin Logo"
                className={styles.logo}
              />
            </Circle>
            <Circle ref={div5Ref}>
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="Ethereum Logo"
                className={styles.logo}
              />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between bg-black">
            <Circle ref={div2Ref}>
              <img
                src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                alt="Cardano Logo"
                className={styles.logo}
              />
            </Circle>
            <Circle ref={div4Ref} className="h-16 w-16">
              <img
                src="defipe-logo-1.png"
                alt="Defi Logo"
                className={styles.logo}
              />
            </Circle>
            <Circle ref={div6Ref}>
              <img
                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002"
                alt="Polkadot Logo"
                className={styles.logo}
              />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                alt="Solana Logo"
                className={styles.logo}
              />
            </Circle>
            <Circle ref={div7Ref}>
              <img
                src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002"
                alt="Ripple Logo"
                className={styles.logo}
              />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          reverse
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          reverse
          endYOffset={10}
        />
      </div>
    </div>
    </div>
  );
}
