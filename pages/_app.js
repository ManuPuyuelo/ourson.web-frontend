import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

function App({ Component, pageProps }) {
  // Récupérez les méta-données spécifiques à chaque page
  const meta = pageProps.meta || {};

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M4VH94M" });
  }, []);
  return (
    <>
      <Meta
        robots={meta.robots || "index,follow"}
        title={meta.title || "Ourson, l'app qui vous donne un coup de patte"}
        description={
          meta.description ||
          "Ourson est la 1ère app intelligente qui vous donne un coup de patte concernant l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités."
        }
        keywords={
          meta.keywords ||
          "Éveil de l'enfant, Nutrition pour bébé, Suivi du sommeil, Activités pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Heures de coucher et de réveil, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente"
        }
        ogTitle={
          meta.ogTitle || "Ourson, l'app qui vous donne un coup de patte"
        }
        ogDescription={
          meta.ogDescription ||
          "Ourson est la 1ère app intelligente qui vous donne un coup de patte concernant l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités."
        }
        ogUrl={meta.ogUrl || "https://www.ourson.app"}
        ogImage={
          meta.ogImage ||
          "https://res.cloudinary.com/djfrwyodt/image/upload/q_auto/v1686416967/squareOursonBackground_d4czmc.webp"
        }
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
