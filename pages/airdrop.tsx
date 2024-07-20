import styles from "@/styles/airdrop.module.css";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import SparklesText from "@/components/magicui/sparkels-text";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter, faLinkedin, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Airdrop() {
    return (
        <>
        <div className={styles.background}>
            <div className={styles.header}>
                <SparklesText text="Giveaway Alert!" className={styles.head}/>
                <p>🚀 Get ready for our token launch and exclusive airdrop! <br/> we’re giving away tokens worth a whopping <span>$10,000</span> worth of tokens to our amazing community! 🌟 
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <p>Tasks to be <span style={{color:"white"}}>followed</span> :</p>
                    <ul>
                        <li>1. Follow us on ProductHunt<br /> Link -<Link href="https://www.producthunt.com/posts/defipe-2" style={{color:"#4361ee",fontWeight:"bold"}}> click me</Link> </li>
                        <li>2. Subscribe to our newsletter</li>
                        <li>3. Follow us on Social Media handles:</li>
                    </ul>
                    <div className={styles.socialIcons}>
                        <Link href="https://t.me/helloDefiPe"><FontAwesomeIcon icon={faTelegram} size="lg" className={styles.icon} /></Link>
                        <Link href="https://x.com/DefiPeio"><FontAwesomeIcon icon={faTwitter} size="lg" className={styles.icon} /></Link>
                        <Link href="https://www.linkedin.com/company/defipe-io/"><FontAwesomeIcon icon={faLinkedin} size="lg" className={styles.icon} /></Link>
                        {/* <Link href="https://discord.com/invite/yourdiscord"><FontAwesomeIcon icon={faDiscord} size="lg" className={styles.icon} /></Link> */}
                        <Link href="https://www.instagram.com/defipeio/"><FontAwesomeIcon icon={faInstagram} size="lg" className={styles.icon} /></Link>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <Image 
                        src="https://media1.giphy.com/media/VOgpnDOAddaN0zr9UE/200w.gif?cid=6c09b952j199ek9r6tgbosnusg5lqsze070o5cvo93e3sw7m&ep=v1_gifs_search&rid=200w.gif&ct=g" 
                        alt="Airdrop GIF"
                        height={300} 
                        width={300} 
                    />
                </div>
            </div>
            <Newsletter></Newsletter>
            {/* <Footer></Footer> */}
        </div>    
        </>
    )
}
