import styles from "../styles/Blog.module.css";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ArticleCard from "../components/ArticleCard";
import CleanURL from "../modules/cleanURL";

function Blog({ articles }) {
  const router = useRouter();

  // SECTIONCONTENT -  Function creation to put page content depending of which page we are at
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

  // SECTIONCONTENT -  Use of the function to put its info inside a variable
  const pageContent = getPageContent();

  // BREADCRUMBS - Create a path depending of current URL
  const breadcrumbs = [{ name: "blog", path: "/blog" }];
  const sectionName = router.query.sectionName || "toutes-les-sections";

  // add the section name to the breadcrumbs
  breadcrumbs.push({ name: sectionName, path: `/blog/${sectionName}` });

  const breadcrumbsElements = breadcrumbs.map((breadcrumb, i) => (
    <React.Fragment key={i}>
      <li
        itemProp="itemListElement"
        itemScope=""
        itemType="http://schema.org/ListItem"
        className="breadcrumbs"
      >
        <Link itemProp="item" href={breadcrumb.path}>
          <a itemProp="name">{breadcrumb.name}</a>
        </Link>
        <meta itemProp="position" content={i + 1} />
      </li>
      {i < breadcrumbs.length - 1 && <li className="breadcrumbArrow">&gt;</li>}
    </React.Fragment>
  ));

  // SECTIONS - Creation of a variable to create 4sections/url depending of articles sections
  const sectionsList = [
    { name: "Toutes les sections", emoji: "💎 " },
    { name: "Nutrition", emoji: "🥦 " },
    { name: "Sommeil", emoji: "💤 " },
    { name: "Activités", emoji: "🎈 " },
  ];

  // SECTIONS - Use of the sections to create 4 buttons above which can filter articles with their own url
  const sections = sectionsList.map((section, i) => (
    <Link key={i} href={`/blog/${CleanURL(section.name)}`}>
      <a
        className={`${styles.sectionLinkLong}  ${
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
  ));

  const dropdownOptions = sectionsList.map((section, i) => (
    <option
      key={i}
      value={section.name}
      selected={pageContent.currentScreen === section.name}
    >
      {section.emoji} {section.name}
    </option>
  ));

  const handleSectionChange = (event) => {
    const selectedSection = event.target.value;
    const sectionURL = `/blog/${CleanURL(selectedSection)}`;
    router.push(sectionURL);
  };

  const sectionsLinks = (
    <div className={styles.filterContainer}>
      {sections}
      <select
        onChange={handleSectionChange}
        className={styles.sectionLinkShort}
      >
        {dropdownOptions}
      </select>
    </div>
  );

  // PAGINATION -  Get the page number from the URL
  const pageFromQuery = parseInt(router.query.page, 10) || 1;
  // PAGINATION - Creation of states to use pagination in the page
  const [isEndOfData, setIsEndOfData] = useState(false);
  const [isBeginningOfData, setIsBeginningOfData] = useState(false);

  // PAGINATION - Suppose totalArticles the number in database, 12 is maximum articles per page
  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / 12);

  // PAGINATION - Put three page numbers before and after the current page number
  const minPageNumber = Math.max(1, pageFromQuery - 3);
  const maxPageNumber = Math.min(totalPages, pageFromQuery + 4);

  const pageNumbers = [];
  for (let i = minPageNumber; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  // PAGINATION - Use of Pagination in numbers variable to be used in return
  const numbers = pageNumbers.map((number, index) => (
    <button
      key={index}
      disabled={number === pageFromQuery}
      onClick={() =>
        router.push(
          `/blog/${CleanURL(pageContent.currentScreen)}?page=${number}`
        )
      }
    >
      {number}
    </button>
  ));

  // PAGINATION - Check if it is the first page
  useEffect(() => {
    setIsBeginningOfData(pageFromQuery === 1);
  }, [pageFromQuery]);

  // PAGINATION - Check if it is the last page
  useEffect(() => {
    setIsEndOfData(pageFromQuery === totalPages);
  }, [pageFromQuery, totalPages]);

  // ARTICLES - Use of data from the fetch in a variable articles which contains as much <ArticleCard/> as needed in the return
  const articlesToShow = articles
    .slice((pageFromQuery - 1) * 12, pageFromQuery * 12)
    .map((data, i) => {
      return <ArticleCard key={i} {...data} />;
    });

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        {sectionsLinks}
        <div className={styles.sectionContainer}>
          <h1>{pageContent.h1Content}</h1>
          <h2>{pageContent.h2Content}</h2>
          <ol
            className={styles.breadcrumbs}
            itemScope
            itemType="http://schema.org/BreadcrumbList"
          >
            {breadcrumbsElements}
          </ol>
          <div className={styles.articleContainer}>{articlesToShow}</div>
          <div className={styles.pagination}>
            <button
              disabled={isBeginningOfData}
              className={`${isBeginningOfData ? styles.noPagination : ""}`}
              onClick={() =>
                router.push(
                  `/blog/${CleanURL(pageContent.currentScreen)}?page=${
                    pageFromQuery - 1
                  }`
                )
              }
            >
              Page précédente
            </button>
            {numbers}
            <button
              disabled={isEndOfData}
              className={`${isEndOfData ? styles.noPagination : ""}`}
              onClick={() =>
                router.push(
                  `/blog/${CleanURL(pageContent.currentScreen)}?page=${
                    pageFromQuery + 1
                  }`
                )
              }
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
