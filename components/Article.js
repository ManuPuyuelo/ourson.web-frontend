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
      </li>
      <meta itemProp="position" content={i + 1} />
      {i < breadcrumbs.length - 1 && <li className="breadcrumbArrow">&gt;</li>}
    </React.Fragment>
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
          <div className={styles.rightSide}>
            <Image
              src={article.imageURL}
              alt={article.content.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <article>
            <p className={styles.longSummary}>{article.content.longSummary}</p>
            {bodyContent}
            <br />
            <p>Auteur : {article.author}</p>
            <p>Date : {article.createdDate}</p>
            <p>Section : {article.tags[0]}</p>
          </article>
        </div>
      </div>
    </main>
  );
}
