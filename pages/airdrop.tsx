import styles from "@/styles/airdrop.module.css"
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import SparklesText from "@/components/magicui/sparkels-text";
export default function Airdrop() {
    return (
        <>
        <div className={styles.background}>
            <div className={styles.header}>
            <SparklesText text="Giveaway Alert!" className={styles.head}/>
                <p>To mark the launch of our revolutionary tokenomics,<br/> we’re giving away tokens worth a whopping <span>$50,000</span> to our amazing community!🚀
                </p>
            </div>
           <div className={styles.content}>
            <div className={styles.leftContent}>
                <p>Tasks to be followed :</p>
                <ul>
                    <li>1. Follow us on ProductHunt</li>
                    <li>2. Subscribe to our newsletter</li>
                    <li>3. Follow us on Social Media handles</li>
                </ul>
            </div>
            <div className={styles.rightContent}>
                <img src="https://media1.giphy.com/media/VOgpnDOAddaN0zr9UE/200w.gif?cid=6c09b952j199ek9r6tgbosnusg5lqsze070o5cvo93e3sw7m&ep=v1_gifs_search&rid=200w.gif&ct=g" height={300} width={300}></img>

            </div>
            </div> 
            <Newsletter></Newsletter>
      {/* <Footer></Footer> */}
        </div>    
        </>
    )
}