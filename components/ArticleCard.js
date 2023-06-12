import styles from "../styles/ArticleCard.module.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function ArticleCard(props) {
  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <a className={styles.linkToArticle} href={props.url}>
          <h3 className={styles.articleTitle}>{props.title}</h3>
        </a>
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <a className={styles.linkToArticle} href={props.url}>
        {props.urlToImage && (
          <Image
            src={props.urlToImage}
            alt={props.title}
            width={600}
            height={314}
          />
        )}
        <p>{props.description}</p>
      </a>
    </div>
  );
}

export default ArticleCard;
