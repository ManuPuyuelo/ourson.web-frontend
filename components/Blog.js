import styles from "../styles/Blog.module.css";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();
  //destructuration, on va declarer une variable pathname qui va chercher la propriété router.pathname
  const { pathname } = router;
  const getTitle = () => {
    const sectionName = router.query.sectionName || "toutes-les-sections";

    if (sectionName === "toutes-les-sections") {
      return "Toutes les sections";
    } else if (sectionName === "nutrition") {
      return "Nutrition";
    } else if (sectionName === "sommeil") {
      return "Sommeil";
    } else if (sectionName === "activites") {
      return "Activités";
    } else {
      return "";
    }
  };

  const currentScreen = getTitle();
  console.log("pathname", pathname);
  console.log("currentScreen", currentScreen);

  const sections = [
    { name: "Toutes les sections", emoji: "💎 " },
    { name: "Nutrition", emoji: "🥦 " },
    { name: "Sommeil", emoji: "💤 " },
    { name: "Activités", emoji: "🎈 " },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container}>
          {sections.map((section, i) => (
            <Link
              key={i}
              href={`/blog/${section.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")}`.replace(/\s/g, "-")}
            >
              <a
                className={`${styles.sectionLink} ${
                  currentScreen === section.name ? styles.sectionLinkActive : ""
                }`}
              >
                <span role="img" aria-label={section.name}>
                  {section.emoji}
                </span>
                {section.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Blog;
