import styles from "../styles/Blog.module.css";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ArticleCard from "../components/ArticleCard";

function Blog() {
  const router = useRouter();
  //destructuration, on va declarer une variable pathname qui va chercher la propriété router.pathname

  const getPageContent = () => {
    const sectionName = router.query.sectionName || "toutes-les-sections";
    let content = {
      currentScreen: "",
      h1Content: "",
      h2Content: "",
      imgContent: "",
    };

    switch (sectionName) {
      case "toutes-les-sections":
        content.currentScreen = "Toutes les sections";
        content.h1Content = "Bienvenue sur toutes les sections";
        content.h2Content =
          "Découvrez les derniers articles sur toutes les thématiques";
        content.imgContent = "urlImageToutesLesSections"; // Mettez ici l'url de votre image pour la section "Toutes les sections"
        break;
      case "nutrition":
        content.currentScreen = "Nutrition";
        content.h1Content = "Bienvenue sur la section Nutrition";
        content.h2Content = "Découvrez les derniers articles sur la nutrition";
        content.imgContent = "urlImageNutrition"; // Mettez ici l'url de votre image pour la section "Nutrition"
        break;
      case "sommeil":
        content.currentScreen = "Sommeil";
        content.h1Content = "Bienvenue sur la section Sommeil";
        content.h2Content = "Découvrez les derniers articles sur le sommeil";
        content.imgContent = "urlImageSommeil"; // Mettez ici l'url de votre image pour la section "Sommeil"
        break;
      case "activites":
        content.currentScreen = "Activités";
        content.h1Content = "Bienvenue sur la section Activités";
        content.h2Content = "Découvrez les derniers articles sur les activités";
        content.imgContent = "urlImageActivites"; // Mettez ici l'url de votre image pour la section "Activités"
        break;
      default:
        content.currentScreen = "";
        content.h1Content = "";
        content.h2Content = "";
        content.imgContent = "";
    }

    return content;
  };

  // Utilisation de la fonction
  const pageContent = getPageContent();

  const sections = [
    { name: "Toutes les sections", emoji: "💎 " },
    { name: "Nutrition", emoji: "🥦 " },
    { name: "Sommeil", emoji: "💤 " },
    { name: "Activités", emoji: "🎈 " },
  ];

  const [pageIndex, setPageIndex] = useState(0);
  const [isEndOfData, setIsEndOfData] = useState(false);
  const [isBeginningOfData, setIsBeginningOfData] = useState(false);

  const [articlesData, setArticlesData] = useState([]);

  // Suppose totalArticles is 100 but it will be the number in database
  const totalArticles = 100;
  const totalPages = Math.ceil(totalArticles / 12);

  // Show three page numbers before and after the current page number
  const minPageNumber = Math.max(1, pageIndex - 3);
  const maxPageNumber = Math.min(totalPages, pageIndex + 4);

  const pageNumbers = [];
  for (let i = minPageNumber; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  // useEffect(() => {
  //   fetch(`https://freshnews-back.manupuyuelo.com/articles?start=${pageIndex*20}&limit=20`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticlesData(data.articles.filter((data, i) => i > 0));
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://freshnews-back.manupuyuelo.com/articles")
      .then((response) => response.json())
      .then((data) => {
        const newArticlesData = data.articles.filter(
          (data, i) => i >= pageIndex * 12 && i < 12 * (pageIndex + 1)
        );
        setArticlesData(newArticlesData);
        setIsEndOfData(newArticlesData.length < 12);
        setIsBeginningOfData(pageIndex === 0);
      });
  }, [pageIndex]);

  const articles = articlesData.map((data, i) => {
    return <ArticleCard key={i} {...data} />;
  });

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.filterContainer}>
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
                  pageContent.currentScreen === section.name
                    ? styles.sectionLinkActive
                    : ""
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
        <div className={styles.sectionContainer}>
          <h1>{pageContent.h1Content}</h1>
          <h2>{pageContent.h2Content}</h2>
          <div className={styles.articleContainer}>{articles}</div>
          <div className={styles.pagination}>
            <button
              disabled={isBeginningOfData}
              className={`${isBeginningOfData ? styles.noPagination : ""}`}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Page précédente
            </button>
            {pageNumbers.map((number, index) => (
              <button
                key={index}
                disabled={number === pageIndex + 1}
                onClick={() => setPageIndex(number - 1)}
              >
                {number}
              </button>
            ))}
            <button
              disabled={isEndOfData}
              className={`${isEndOfData ? styles.noPagination : ""}`}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Page suivante
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
