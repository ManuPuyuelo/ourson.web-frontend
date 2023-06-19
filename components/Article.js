import styles from "../styles/Article.module.css";

import { useRouter } from "next/router";

export default function Article({ article }) {
  const bodyContent = article.content.body.map((data, i) => (
    <p key={i}>{data.content}</p>
  ));

  return (
    <article>
      <br /> <br /> <br /> <br /> <br />
      <h1>
        🚧 Cette page est en travaux et devrait être disponible dès ce soir
        (19/06/2023)
      </h1>
      <h3>{article.content.title}</h3>
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
