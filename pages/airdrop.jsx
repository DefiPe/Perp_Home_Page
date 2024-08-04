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

  const handleSubmit = async () => {
    if (!isChecked) {
      alert("Please confirm that you have provided the correct links.");
      return;
    }

    try {
      const response = await axios.post("/api/submit", {
        erc20,
        twitter,
        telegram
      });

      if (response.data.status === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Error submitting data!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data!");
    }
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.header}>
          <SparklesText text="DeFiPe Airdrop" className={styles.head} />
          <p>
            🚀 Get ready for our token launch and exclusive airdrop! <br />{" "}
            we’re giving away tokens worth a whopping <span>$10,000</span> worth
            of tokens to our amazing community! 🌟
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <p style={{ marginBottom: "2rem",marginTop:"2rem" }}>
              Tasks to be <span style={{ color: "white" }}>followed</span> :
            </p>
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
            <div className={styles.inputs}>
              <label>Enter Your ERC20 Address</label>
              <input
                type="text"
                className={styles.inputBox}
                value={erc20}
                name="Wallet"
                onChange={(e) => setErc20(e.target.value)}
              />
              <label>Enter Your Twitter Handle</label>
              <input
                type="text"
                className={styles.inputBox}
                value={twitter}
                name="Twitter"
                onChange={(e) => setTwitter(e.target.value)}
              />
              <label>Enter Your post Re-tweet url</label>
              <input
                type="text"
                className={styles.inputBox}
                value={erc20}
                name="Wallet"
                onChange={(e) => setErc20(e.target.value)}
              />
              <label>Enter Your Telegram Handle</label>
              <input
                type="text"
                className={styles.inputBox}
                value={telegram}
                name="Telegram"
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
            <div className={styles.declaration}>
              <input
                type="checkbox"
                id="confirmation"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="confirmation" className={styles.declarationText}>
                I confirm that I have provided the correct links and information.
              </label>
            </div>
            <Button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
}
