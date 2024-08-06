import React from "react";
import styles from "../styles/faqsection.module.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaqIcon } from "./faqicon.js";

export default function FaqFeature() {
  const FaqContent = [
    {
      id: 1,
      title: "What is DefiPe",
      body: "A perpetual future trading exchange for synthetic assets. Where traders can trade crypto, real-life assets like synthetic stocks, and NFT floor prices in a noncustodial way. Users can speculate any asset price will increase(long) or decrease(short) in the future and also leverage their trade up to 20x.",
    },
    {
      id: 2,
      title: "When will DefiPe launch its perpetual trading platform?",
      body: "We will launch it very soon.",
    },
    {
      id: 3,
      title: "What is the trading fee in DefiPe?",
      body: "We plan to implement dynamic trading fees for our users based on their 30-day trading volume. However, initially, we will charge 0.01% for the market maker and 0.04% for the taker.",
    },
    {
      id: 4,
      title: "How many trading pairs will DefiPe support in the future time?",
      body: "We plan to launch as many trading pairs as possible in the future, such as BTC-USDT and Azuki-USDT, and many more.",
    },
    {
      id: 5,
      title: "How can I contact the DefiPe Team?",
      body: "If you have any questions or need assistance, please feel free to send an email to hello@defipe.io or join our Telegram group with the username @defipeio.",
    },
    {
      id: 6,
      title: "What is the next step for the platform?",
      body: "Our platform is set to launch on the beta test net soon, followed by the exchange on the main net.",
    },
    {
      id: 7,
      title: "What is perpetual trading?",
      body: 'Perpetual futures, also referred to as perpetual contracts or simply "perpetual," are a type of financial agreement that enables traders to speculate on the value of an asset without any expiration date. Unlike conventional futures contracts, which have a fixed expiry date, perpetual contracts give traders the freedom to hold their positions for as long as they want. This makes them a popular choice for cryptocurrency traders who want to hedge risk or take advantage of volatile market conditions.',
    },
  ];
  return (
    <div className={styles.faqSection} id="faq">
      <h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
      <Accordion variant="splitted">
        {FaqContent.map((item) => (
          <AccordionItem
            key={item.id}
            aria-label={`Faq ${item.id}`}
            indicator={({ isOpen }) => <FaqIcon flag={isOpen} />}
            disableIndicatorAnimation={true}
            title={<span className={styles.faqSectionH2}>{item.title}</span>}
            className={styles.faqItems}
          >
            {<p>{item.body}</p>}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
