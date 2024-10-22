import styles from '../styles/DemoVideo.module.css';
import ShineBorder from "@/components/magicui/shine-border";

export default function DemoVideo() {
    return (
        <>
                <div className={styles.borderWrapper}>
                <ShineBorder
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
                
                {/* <div className={styles.videoWrapper}> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kaB-pHys2J0?si=eACXupLlwjiwRKcP" 
                className={styles.video}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                {/* </div> */}

            </ShineBorder>
                </div>
             
        </>
    );
}
