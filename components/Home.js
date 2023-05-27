import styles from "../styles/Home.module.css";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container1}>
          <h1 className={styles.title}>Développeur Fullstack</h1>
          <p className={styles.titleText}>
            JS, HTML, CSS<br></br>React, React Native, Express
          </p>
          <div className={styles.heroButtons}>
            <div className={styles.heroButton}>
              <a href="/portfolio">
                <p>DERNIERS PROJETS</p>
              </a>
            </div>
            <div className={styles.heroButton}>
              <a href="/contact">
                <p>ME CONTACTER</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.container2}>
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
              className={[
                styles.projectImage0,
                styles.projectImage1,
                styles.projectImage2,
              ].join(" ")}
            ></div>
          </div>

          <div className={styles.projectDescription1}>
            <h2>Ourson</h2>
            <p>
              Ourson est la 1ère app intelligente qui vous donne un coup de
              patte concernant l’éveil de votre enfant sur 3 aspects :
              nutrition, suivi du sommeil et activités.
            </p>
            <div className={styles.heroButtons}>
              <div
                className={[styles.heroButton, styles.heroButton2].join(" ")}
              >
                <a href="/contact">
                  <p>DÉCOUVRIR </p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.container3}></div>
      </div>
    </main>
  );
}

export default Home;
