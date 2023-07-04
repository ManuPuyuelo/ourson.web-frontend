import Blog from "../components/Blog";

export async function getStaticProps() {
  const meta = {
    title: "Le Blog d'Ourson, l'app qui vous donne un coup de patte",
    description:
      "Retrouvez sur le blog tous les conseils d'Ourson sur l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités.",
    keywords:
      "Blog, Conseils, Accompagnement, Articles, Expertise, Éveil de l'enfant, Nutrition pour bébé, Suivi du sommeil, Activités pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Heures de coucher et de réveil, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente",
    ogTitle: "Le Blog d'Ourson, l'app qui vous donne un coup de patte",
    ogDescription:
      "Retrouvez sur le blog tous les conseils d'Ourson sur l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités.",
    ogUrl: "https://www.ourson.app/blog",
  };
  try {
    const res = await fetch(
      `https://back.ourson.app/articles/section/toutes-les-sections`
    );
    const data = await res.json();

    if (data.result) {
      return {
        props: {
          articles: data.articlesList,
          meta,
        },
      };
    } else {
      // Handle error
      return {
        props: {
          articles: [],
          meta,
        },
      };
    }
  } catch (error) {
    // Handle error
    return {
      props: {
        articles: [],
        meta,
      },
    };
  }
}

function BlogPage({ articles }) {
  return (
    <>
      <Blog articles={articles} />
    </>
  );
}

export default BlogPage;
