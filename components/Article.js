import styles from "../styles/Article.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { marked } from "marked";
import { sanitize } from "isomorphic-dompurify";

export default function Article({ article }) {
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
