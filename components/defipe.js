import styles from '../styles/defipe.module.css';
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import confetti from 'canvas-confetti';

export default function Defipe() {
  const handleConfetti = () => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>What is Defipe?</h2>
          <p >
          <span>Think your CryptoPunks or any other blue-chip NFT project is skyrocketing in value for a short time? You want to cash in but can’t bear to sell your rare gem below market value? What do you do?</span><br />
          <span>Hold onto your pixelated hats! With Defipe, you can speculate on the floor prices of top NFT projects like Bored Ape Yacht Club, CryptoPunks, and more without saying goodbye to your beloved JPEGs.</span><br />
          <span style={{color:"white"}}>So, traders, get set, trade, and watch those floor prices shoot for the stars!🌟</span><br/>
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Card
            isFooterBlurred
            radius="lg"
            className={styles.card}
          >
            <img
              alt="Woman listening to music"
              className="object-cover"
              
              src="NFT2.png"
         
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80" style={{ color: "white", fontFamily: "Raleway" }}>Are You Bored?,</p>
              <Button onClick={handleConfetti} className="text-tiny text-white bg-black/20"style={{ color: "white", fontFamily: "Raleway",fontWeight:"bold" }} variant="flat" color="default" radius="lg" size="sm">
               Click Me !
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
