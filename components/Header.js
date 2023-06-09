import styles from "../styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const router = useRouter();
  //destructuration, on va declarer une variable pathname qui va chercher la propriété router.pathname
  const { pathname } = router;

  const getTitle = () => {
    if (pathname === "/") {
      return "";
    } else if (pathname === "/contact") {
      return "CONTACT";
    } else {
      return "";
    }
  };

  const currentScreen = getTitle();

  return (
    <div className={styles.headercontainer}>
      <div className={styles.HeaderLogo}>
        <nav>
          <a href="/" className={styles.brandNameLong}>
            Ourson
          </a>
        </nav>
      </div>
      <h1 className={styles.title}>{currentScreen}</h1>
      <div className={styles.HeaderRightMenu}>
        <nav>
          <div
            className={`${styles.navigationMenu} ${
              isNavExpanded ? styles.navigationMenuExpanded : ""
            }`}
          >
            <ul>
              <div>
                <a href="/">Accueil</a>
              </div>
              <div>
                <a href="/demo">Demo</a>
              </div>
            </ul>
            <button
              className={`${styles.hamburger} ${
                isNavExpanded ? styles.hamburgerExpanded : ""
              }`}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <FontAwesomeIcon className={styles.icons} icon={faBars} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
