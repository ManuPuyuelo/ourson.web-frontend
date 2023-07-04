import styles from "../styles/Article.module.css";

import React, { useState, useEffect, useRef } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";

export default function Article({ article }) {
  const router = useRouter();

  // BREADCRUMBS - Create a path depending of current URL
  const checkOverflow = (textElement) => {
    if (textElement.scrollWidth > textElement.offsetWidth) {
      const text = textElement.innerText;
      const lastIndex = text.lastIndexOf("-");
      textElement.innerText = text.substring(0, lastIndex);
    }
  };

  const breadcrumbs = [];
  const pathArray = router.asPath
    .split("?")[0]
    .split("/")
    .filter((p) => p);

  pathArray.reduce((prev, curr, index) => {
    const path = `${prev}/${curr}`;
    breadcrumbs.push({ name: curr, path: path });
    return path;
  }, "");

  const breadcrumbsElements = breadcrumbs.map((breadcrumb, i) => (
    <li
      key={i}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
      className="breadcrumbs"
    >
      <Link href={breadcrumb.path}>
        <a itemProp="item">
          <span itemProp="name">{breadcrumb.name}</span>
        </a>
      </Link>
      <meta itemProp="position" content={i + 1} />
      {i < breadcrumbs.length - 1 && (
        <span className="breadcrumbArrow"> &gt;</span>
      )}
    </li>
  ));

  marked.use({
    mangle: false,
    headerIds: false,
  });

  const bodyContent = article.content.body.map((data, i) => {
    const rawMarkup = marked(data.content);
    const cleanMarkup = sanitize(rawMarkup);
    const markup = { __html: cleanMarkup };

    return (
      <>
        <br />
        <div
          key={i}
          className={styles.markdownContent}
          dangerouslySetInnerHTML={markup}
        />
      </>
    );
  });

  let renderTag;
  switch (article.tags[0]) {
    case "activites":
      renderTag = "🎈 Activités";
      break;
    case "sommeil":
      renderTag = "💤 Sommeil";
      break;
    case "nutrition":
      renderTag = "🥦 Nutrition";
      break;
    default:
      renderTag = "";
  }

  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.breadcrumbsContainer}>
          <ol
            className={styles.breadcrumbs}
            itemScope
            itemType="http://schema.org/BreadcrumbList"
          >
            {breadcrumbsElements}
          </ol>
        </div>
        <div className={styles.sumUpContainer}>
          <div className={styles.leftSide}>
            <h1 className={styles.title}>
              <mark className={styles.mark}>{article.content.title}</mark>
            </h1>
            <br />
            <h2 className={styles.subtitle}>{article.content.summary}</h2>
          </div>
          <div className={styles.rightSideLong}>
            <Image
              src={article.imageURL}
              alt={article.content.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.rightSideShort}>
          <Image
            src={article.imageURL}
            alt={article.content.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.sectionContainer}>
          <article>
            <p className={styles.longSummary}>{article.content.longSummary}</p>
            {bodyContent}
            <br />
            <h4 className={styles.meta} style={{ textAlign: "right" }}>
              Auteur : {article.author}
            </h4>
            <h4 className={styles.meta} style={{ textAlign: "right" }}>
              Date de publication : {new Date(article.createdDate).getDate()}-
              {new Date(article.createdDate).getMonth() + 1}-
              {new Date(article.createdDate).getFullYear()}
            </h4>
            <h4 className={styles.meta} style={{ textAlign: "right" }}>
              Section : {renderTag}
            </h4>
          </article>
        </div>
      </div>
    </main>
  );
}
