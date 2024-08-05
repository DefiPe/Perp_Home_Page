import { useState } from "react";
import axios from "axios";
import styles from "@/styles/airdrop.module.css";
import Newsletter from "../components/newsletter";
import SparklesText from "@/components/magicui/sparkels-text";
import { Button } from "@nextui-org/react";
import { toast,ToastContainer } from "react-toastify";

export default function Airdrop() {
  const handleSubmit =async (e)=>{
    e.preventDefault();
    const res=await axios.post("/api/sheet",{
      Wallet:e.target.Wallet.value,
      Twitter:e.target.Twitter.value,
      RetweetURL: e.target.RetweetURL.value,
     Telegram:e.target.Telegram.value
    })
    console.log(res);
    if (res.status === 200) {
      toast.success("Get ready for the results, stay tuned 🎊", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong, please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  } 
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
            </form>
            <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition:Bounce
        />
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
}
