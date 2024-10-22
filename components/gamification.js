import styles from "../styles/gamification.module.css"
export default function Gamification(){
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.headImage}>
            <img src="/game.svg"></img>
            </div>
            <div className={styles.header}>
            <h1>Level up your Trading Experience</h1>
            </div>
            <div className={styles.subHeader}>
            Mirror the way your mind works by associating notes through backlinks.<br />
            Reflect builds you a second brain that you can reference anytime.
            </div>
            <div className={styles.card}>
                
            </div>
        </div>
        
        </>
    )
}