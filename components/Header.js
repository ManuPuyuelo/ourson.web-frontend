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
      return "Accueil";
    } else if (pathname === "/demo") {
      return "Demo";
    } else if (pathname === "/blog") {
      return "Blog";
    } else {
      return "";
    }
  };

  const currentScreen = getTitle();

  return (
    <header className={styles.headercontainer}>
      <div className={styles.HeaderLogo}>
        <nav>
          <a href="/" className={styles.brandNameLong}>
            Ourson
          </a>
        </nav>
      </div>
      <div className={styles.HeaderRightMenu}>
        <nav>
          <div
            className={`${styles.navigationMenu} ${
              isNavExpanded ? styles.navigationMenuExpanded : ""
            }`}
          >
            <ul>
              <div
                className={`${
                  currentScreen === "Accueil" ? styles.navigationMenuActive : ""
                }`}
              >
                <a href="/">Accueil</a>
              </div>
              <div
                className={`${
                  currentScreen === "Demo" ? styles.navigationMenuActive : ""
                }`}
              >
                <a href="/demo">Demo</a>
              </div>
              <div
                className={`${
                  pathname.includes("/blog") ? styles.navigationMenuActive : ""
                }`}
              >
                <a href="/blog">Blog</a>
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
    </header>
  );
}

export default Header;
