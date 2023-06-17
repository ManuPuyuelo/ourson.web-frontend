import styles from "../styles/Article.module.css";

import { useRouter } from "next/router";

export default function Post({ articleData }) {
  const { title, content, author, date, section, image } = articleData;

  return (
    <article>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{content}</p>
      <p>Auteur : {author}</p>
      <p>Date : {date}</p>
      <p>Section : {section}</p>
    </article>
  );
}

export async function getStaticPaths() {
  // Fetch tous les articles juste pour obtenir les IDs et slugs
  const res = await fetch("https://freshnews-back.manupuyuelo.com/articles");
  const articles = await res.json();

  const paths = articles.map((article) => ({
    params: { id: article.id.toString(), slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch les données pour l'article spécifique
  const res = await fetch(
    `https://freshnews-back.manupuyuelo.com/articles/${params.id}`
  );
  const articleData = await res.json();

  return { props: { articleData } };
}
