import styles from "../styles/Demo.module.css";

import React, { useState, useEffect, useRef } from "react";

function Demo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container1}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Découvrez Ourson</h1>
            <p className={styles.description}>
              ✨Découvrez en exclusivité la vidéo teaser de l'application
              révolutionnaire Ourson, l'app pour l'éveil de votre enfant ! Bien
              qu'elle ne soit pas encore disponible sur les stores
              d'applications, nous voulions vous offrir un aperçu captivant de
              ce qui vous attend. Ne manquez pas cette occasion unique de
              faciliter votre quotidien de parents occupés avec Ourson 🐻 !{" "}
              <span style={{ fontWeight: "bold" }}>
                <br />
                <br />
                #Ourson #ÉveilDeL'Enfant #VidéoTeaser
              </span>
            </p>
          </div>

          <video
            className={styles.video}
            ref={videoRef}
            controls
            loop
            muted
            playsinline
            onEnded={() => videoRef.current.play()}
            onClick={handleVideoClick}
          >
            <source src="/demoOursonReduced.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
          </video>
        </div>
      </div>
    </main>
  );
}

export default Demo;
