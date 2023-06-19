import styles from "../styles/Article.module.css";

import { useRouter } from "next/router";

export default function Article({ article }) {
  const bodyContent = article.content.body.map(
    (data, i) => `<p key=${i}>${data.content}</p>`
  );

  return (
    <article>
      <h1>{article.content.title}</h1>
      <img src={article.imageURL} alt={article.content.title} />
      <p>{article.content.summary}</p>
      <p>{article.content.longSummary}</p>
      {bodyContent}
      <p>Auteur : {article.author}</p>
      <p>Date : {article.createdDate}</p>
      <p>Section : {article.tags[0]}</p>
    </article>
  );
}
