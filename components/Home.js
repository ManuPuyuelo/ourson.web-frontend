import styles from "../styles/Home.module.css";

import React, { useEffect, useState } from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 980px)");

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setIsSmallScreen(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container1}>
          <div
            className={[styles.projectImage0, styles.projectImage1].join(" ")}
          >
            <Player
              autoplay
              loop
              speed={1}
              src="https://assets2.lottiefiles.com/packages/lf20_sg5agyvh.json"
              className={styles.projectImage0}
            ></Player>
            <div
              className={[styles.projectImage0, styles.projectImage2].join(" ")}
            ></div>
          </div>

          <div className={styles.projectDescription1}>
            <h1 className={styles.title}>
              <span className={styles.title_ourson}>
                Ourson,{isSmallScreen && <br />}{" "}
              </span>
              <span className={styles.title_app}>
                l'app qui vous donne un coup de patte
              </span>
            </h1>
            <h2 className={styles.titleText}>
              Ourson est la 1ère app intelligente qui vous donne un coup de
              patte concernant l’éveil de votre enfant sur 3 aspects :
              nutrition, suivi du sommeil et activités.
            </h2>

            <div className={styles.heroButtons}>
              <div className={styles.heroButton}>
                <div className={styles.heroButtonGoogle} />
              </div>
              <div className={styles.heroButton}>
                <div className={styles.heroButtonApple} />
              </div>
            </div>
            <div className={styles.arrowContainer}>
              <div className={styles.arrowEmpty}></div>
              <div className={styles.arrowWIP}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.secondSection}></div> */}
    </main>
  );
}

export default Home;
