import styles from "../styles/ArticleCard.module.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function ArticleCard(props) {
  let renderTag;

  switch (props.tags[0]) {
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
    <a
      className={styles.linkToArticle}
      href={`/blog/${props.tags[0]}/${props.slug}`}
    >
      <div className={styles.articles}>
        <div className={styles.header}>
          {props.imageURL && (
            <Image
              src={props.imageURL}
              alt={props.content.title}
              width={600}
              height={350}
              objectFit="cover"
            />
          )}
          <div className={styles.articleHeader}>
            <h3 className={styles.articleTitle}>{props.content.title}</h3>

            <p className={styles.subtitle}>{props.content.subtitle}</p>
          </div>
        </div>

        <h4 className={styles.meta} style={{ textAlign: "right" }}>
          {new Date(props.createdDate).getDate()}-
          {new Date(props.createdDate).getMonth() + 1}-
          {new Date(props.createdDate).getFullYear()} - {renderTag}
        </h4>
      </div>
    </a>
  );
}

export default ArticleCard;
