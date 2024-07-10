import Head from "next/head";
// import { Inter } from 'next/font/google'
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Features from "../components/features";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import HamMenu from "../components/hammenu";
import FaqFeature from "../components/faqfeature";
import { GlobeDemo } from "@/components/magicui/globeDiv";
import MarqueeDemo from "@/components/magicui/marqueeDiv";
import { AnimatedDiv } from "@/components/magicui/animatedDiv";
import DemoVideo from "../components/demoVideo";
import { NftView } from "@/components/magicui/orbiting-div";
import Defipe from "@/components/defipe";


// import { Button } from "@/@/ui/button";
// //import { Button } from "@/components/ui/button";
 
export default function Home() {
  return (
    <>
      <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300&display=swap" rel="stylesheet"/>
        <title>DefiPe || Perpetual trading DEX for Synthetic Assets</title>
        <meta
          name="description"
          content="A perpetual trading DEX where traders can trade cryptocurrencies, NFT floor prices, and real-life assets such as synthetic stocks."
        />
        <meta
          name="keywords"
          content="future trading, perpetual trading, Trade, dex, decentralized exchange, crypto, NFT, synthetic stocks, derivative exchange, NFT floor price"
        />

        <meta
          property="og:title"
          content="DefiPe || Perpetual trading DEX for Synthetic Assets"
        />
        <meta
          property="og:description"
          content="A perpetual trading DEX where traders can trade cryptocurrencies, NFT floor prices, and real-life assets such as synthetic stocks."
        />
        <meta
          property="og:image"
          content="https://defipe.b-cdn.net/social-overlay.png"
        />

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation></Navigation>
      <Hero></Hero>
      <Defipe></Defipe>
      
      <Features></Features>
      <DemoVideo></DemoVideo>
      <GlobeDemo></GlobeDemo>
      {/* <NftView></NftView> */}
      <MarqueeDemo></MarqueeDemo>
      <AnimatedDiv></AnimatedDiv>
      <FaqFeature></FaqFeature> 
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}
