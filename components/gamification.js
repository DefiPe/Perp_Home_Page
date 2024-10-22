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
                Earn Fipe points by completing tasks and challenges in a fun, gamified experience<br />
                Boost your score and climb the leaderboard as you unlock new rewards
                </div>
                <div className={styles.card}>
                    
                </div>
            </div>
            
            </>
        )
    }