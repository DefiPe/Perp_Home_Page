import { useState } from "react";
import axios from "axios";
import styles from "@/styles/airdrop.module.css";
import Newsletter from "../components/newsletter";
import SparklesText from "@/components/magicui/sparkels-text";
import { Button } from "@nextui-org/react";

export default function Airdrop() {
  const [erc20, setErc20] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/sheet", {
      Wallet: e.target.Wallet.value,
      Twitter: e.target.Twitter.value,
      RetweetURL: e.target.RetweetURL.value,
      Telegram: e.target.Telegram.value
    })
    console.log(res);
  }

  return (
    <>
      <div className={styles.background}>
        <div className={styles.header}>
          <SparklesText text="DefiPe Airdrop" className={styles.head} />
          <p>
            🚀 Get ready for our token launch and exclusive airdrop! <br />{" "}
            We're giving away a prize pool of <span>$300,000</span> worth of FIPE tokens to our amazing community! 🌟
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            {/* <p style={{ marginBottom: "2rem", marginTop: "2rem" }}>
              Tasks to be <span style={{ color: "white" }}>followed</span> :
            </p> */}
            <div className={styles.allTasks}>
              <div className={styles.task}>
                <div className={styles.taskNumber}>Task 1</div>
                <div className={styles.taskContent}>
                  <div className={styles.taskList}>Follow our official Twitter Account</div>
                  <Button className={styles.taskBtton} href="https://x.com/DefiPeio">Follow</Button>
                </div>
              </div>
              <div className={styles.task}>
                <div className={styles.taskNumber}>Task 2</div>
                <div className={styles.taskContent}>
                  <div className={styles.taskList}>Re-tweet our pinned post on twitter</div>
                  <Button className={styles.taskBtton}>Retweet now</Button>
                </div>
              </div>
              <div className={styles.task}>
                <div className={styles.taskNumber}>Task 3</div>
                <div className={styles.taskContent}>
                  <div className={styles.taskList}>Join our telegram channel</div>
                  <Button className={styles.taskBtton} href="https://telegram.me/helloDefiPe">Join Now</Button>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                <label>Enter Your ERC20 Address</label>
                <input
                  type="text"
                  className={styles.inputBox}
                  name="Wallet"

                />
                <label>Enter Your Twitter Handle</label>
                <input
                  type="text"
                  className={styles.inputBox}
                  name="Twitter"
                />
                <label>Enter Your post Re-tweet url</label>
                <input
                  type="text"
                  className={styles.inputBox}
                  name="RetweetURL"
                />
                <label>Enter Your Telegram Handle</label>
                <input
                  type="text"
                  className={styles.inputBox}
                  name="Telegram"
                />
              </div>
              <Button className={styles.submitButton} type="submit">
                Submit
              </Button>

              {/* <Button radius="full" className={styles.submitButton} type="submit">
                Button
              </Button> */}
            </form>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
}
