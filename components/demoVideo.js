import styles from '../styles/DemoVideo.module.css';

export default function DemoVideo() {
    return (
        <>
            <div className={styles.videoContainer}>
                <div className={styles.head}>
                    <h3>How it works?</h3>
                </div>
                <div className={styles.videoWrapper}>
                    <iframe
                        className={styles.video}
                        src="https://www.youtube.com/embed/SrrdsPCDCvU?si=OGR_kV9rXi4Pi7p4"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        // referrerpolicy="strict-origin-when-cross-origin"
                        // allowfullscreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}
