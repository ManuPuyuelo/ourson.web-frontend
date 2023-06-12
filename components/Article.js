import styles from "../styles/Article.module.css";

import React, { useState, useEffect, useRef } from "react";

function Article() {
  return (
    <main className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.container}></div>
      </div>
    </main>
  );
}

export default Article;
