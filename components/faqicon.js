import Image from "next/image";
import React from "react";
export const FaqIcon = (props) => (
  <Image
    src={(props.flag)?"https://defipe.b-cdn.net/faqminus.svg":"https://defipe.b-cdn.net/faqAdd.svg"}
    width={100}
    height={100}
    alt="faq add icon"
  />
);
