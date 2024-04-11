import { useRef, useState } from "react";
import styles from "../styles/newsletter.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
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
    <>
      <div className={styles.newsLetter}>
        <div className={styles.newsletterDiv}>
          <h3>Subscribe to our newsletter</h3>
          <p>
            Get weekly update about our product on your email,<br/> no spam
            guaranteed we promise ✌️
          </p>
          <form className={styles.newsDiv} onSubmit={subscribeUser}>
            {" "}
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="yourname123@gmail.com"
              className={styles.newsInput}
              ref={inputRef}
              required
              autoCapitalize="off"
              autoCorrect="off"
            ></input>
            <button className={styles.newsButton}>SUBSCRIBE</button>
          </form>
        </div>
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
    </>
  );
}
