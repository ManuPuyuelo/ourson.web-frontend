import Demo from "../components/Demo";

function DemoPage() {
  return (
    <>
      <Demo />
    </>
  );
}

export async function getStaticProps() {
  const meta = {
    title: "Démo d'Ourson, l'app qui vous donne un coup de patte",
    keywords:
      "Démonstration Vidéo, Prototype, Éveil de l'enfant, Nutrition pour bébé, Suivi du sommeil, Activités pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Heures de coucher et de réveil, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente",
    ogTitle: "Démo d'Ourson, l'app qui vous donne un coup de patte",
    ogUrl: "https://www.ourson.app/demo",
  };

  return {
    props: {
      meta,
    },
  };
}
export default DemoPage;
