import Head from "next/head";
// import { Inter } from 'next/font/google'
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Features from "../components/features";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import HamMenu from "../components/hammenu";

// import { Button } from "@/@/ui/button";
// //import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

       

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Preahvihear&family=Roboto:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>

        
      </Head> */}
      <Navigation></Navigation>
      <Hero></Hero>
      <Features></Features>
      <Newsletter></Newsletter>
      {/* <HamMenu></HamMenu> */}
      <Footer></Footer>
    </>
  );
}
