import Header from "../../components/Header";
import Blog from "../../components/Blog";

export async function getStaticProps({ params }) {
  const getPageContent = () => {
    const sectionName = params.sectionName || "toutes-les-sections";
    let content = {
      currentScreen: "",
      keywordsContent: "",
    };

    switch (sectionName) {
      case "toutes-les-sections":
        content.currentScreen = "Toutes les sections";
        content.keywordsContent =
          "Blog, Conseils, Accompagnement, Articles, Expertise, Éveil de l'enfant, Nutrition pour bébé, Suivi du sommeil, Activités pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Heures de coucher et de réveil, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente";
        break;
      case "nutrition":
        content.currentScreen = "Nutrition";
        content.keywordsContent =
          "Blog, Conseils, Accompagnement, Articles, Expertise, Éveil de l'enfant, Purées, Soupes, Manger solide, Allergies des touts petits, Appétit de l'enfant, Diversification Alimentaire, Nutrition pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente";
        break;
      case "sommeil":
        content.currentScreen = "Sommeil";
        content.keywordsContent =
          "Blog, Conseils, Accompagnement, Articles, Expertise, Sieste, Sommeil des touts petits, Reveil des bébés, Difficultés à s'endormir, Régularité des siestes, Enfant qui fait ses nuits, Éveil de l'enfant, Suivi du sommeil,Partage d'informations, Collaboration entre parents, Heures de coucher et de réveil, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente";
        break;
      case "activites":
        content.currentScreen = "Activités";
        content.keywordsContent =
          "Blog, Conseils, Accompagnement, Articles, Expertise, Éveil de l'enfant, Activités pour bébé, Berceuses, Contes pour enfants, Jeux en pleins airs pour enfants, Jeux des touts petits, Partage d'informations, Collaboration entre parents, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente";
        break;
      default:
        content.currentScreen = "";
        content.keywordsContent = "";
    }

    return content;
  };
  const pageContent = getPageContent();
  const meta = {
    title: `Le Blog d'Ourson - ${pageContent.currentScreen}, l'app qui vous donne un coup de patte`,
    description: `Retrouvez sur le blog tous les conseils d'Ourson sur l’éveil de votre enfant sur l'aspect ${pageContent.currentScreen}`,
    keywords: pageContent.keywordsContent,
    ogTitle: `Le Blog d'Ourson - ${pageContent.currentScreen}, l'app qui vous donne un coup de patte`,
    ogDescription: `Retrouvez sur le blog tous les conseils d'Ourson sur l’éveil de votre enfant sur l'aspect ${pageContent.currentScreen}`,
    ogUrl: `https://www.ourson.app/blog/${params.sectionName}`,
  };
  const sectionName = params.sectionName;
  try {
    const res = await fetch(
      `https://back.ourson.app/articles/section/${sectionName}`
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

export async function getStaticPaths() {
  const sections = ["nutrition", "sommeil", "activites", "toutes-les-sections"];

  const paths = sections.map((section) => ({
    params: { sectionName: section },
  }));

  return { paths, fallback: false };
}

export default function BlogPage({ articles }) {
  return (
    <>
      <Blog articles={articles} />
      <Header />
    </>
  );
}
