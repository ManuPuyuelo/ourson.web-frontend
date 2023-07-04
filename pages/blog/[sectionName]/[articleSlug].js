import Header from "../../../components/Header";
import Article from "../../../components/Article";

export async function getStaticPaths() {
  try {
    const res = await fetch(`https://back.ourson.app/articles/`);
    const data = await res.json();

    if (data.result) {
      const paths = data.articlesList.map((eachArticle) => ({
        params: {
          sectionName: eachArticle.tags[0],
          articleSlug: eachArticle.slug,
        },
      }));

      return { paths, fallback: false };
    } else {
      // Handle error
      return {
        paths: [],
        fallback: false,
      };
    }
  } catch (error) {
    // Handle error
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const slug = params.articleSlug;
  try {
    const res = await fetch(`https://back.ourson.app/articles/${slug}`);
    const data = await res.json();

    if (data.result) {
      const article = data.article;
      const meta = {
        title: `Le Blog d'Ourson, ${article.content.title}`,
        description: `${article.content.summary}`,
        keywords: params.articleSlug.split("-").join(", "),
        ogTitle: `Le Blog d'Ourson, ${article.content.title}`,
        ogDescription: `${article.content.summary}`,
        ogUrl: `https://www.ourson.app/blog/${params.sectionName}/${params.articleSlug}`,
      };

      return {
        props: {
          article,
          meta,
        },
      };
    } else {
      // Handle error
      return {
        props: {
          article: null,
          meta: {},
        },
      };
    }
  } catch (error) {
    // Handle error
    return {
      props: {
        article: null,
        meta: {},
      },
    };
  }
}

export default function ArticlePage({ article }) {
  return (
    <>
      <Article article={article} />
      <Header />
    </>
  );
}
