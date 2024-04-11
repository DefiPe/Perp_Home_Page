import { useRef, useState } from 'react';
import styles from '../styles/NewsLetterSignUpForm.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function WaitList() {
  const inputRef = useRef(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribeUser = async (e) => {
    e.preventDefault();

    console.log("abc ", inputRef);

    if (!inputRef.current || !inputRef.current.value) {
      console.error("Email input is not available.");
      return;
    }

    try {
      const res = await fetch("/api/subscriberUser", {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      console.log("resss ", res);

      if (!res.ok) {
        const data = await res.json();
        toast.error("☹️ Failed to subscribe user.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
        throw new Error(data.error || "Failed to subscribe user.");
      }

      setIsSubscribed(true); // Show success message
      toast("😉 Successfully subscribed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // setTimeout(() => {
      //   setIsSubscribed(false);
      // }, 3000);
    } catch (error) {
      toast.error("😭 Error subscribing user.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.newsletterForm} onSubmit={subscribeUser}>
        <label htmlFor="email-input" className={styles.formLabel}>
          Join our Wait List 
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="your best email"
          ref={inputRef}
          className={styles.input}
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button type="submit" value="" name="subscribe" className={styles.button}>
          Join Now
        </button>
      </form>
      {isSubscribed && (
        <div className={styles.successMessage}>
          <p>You are subscribed to defipe!</p>
        </div>
      )}

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
  );
}
