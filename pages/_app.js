import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M4VH94M" });
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ourson est la 1ère app intelligente qui vous donne un coup de patte concernant l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités."
        />
        <meta
          name="keywords"
          content="Éveil de l'enfant, Nutrition pour bébé, Suivi du sommeil, Activités pour bébé, Partage d'informations, Collaboration entre parents, Recettes personnalisées pour bébé, Équilibre alimentaire, Heures de coucher et de réveil, Activités adaptées, Niveau d'éveil de l'enfant, Préférences de l'enfant, Parents occupés, Enfants de 4 mois à 3 ans, Vie urbaine, App intelligente"
        />

        <meta
          property="og:title"
          content="Ourson, l'app qui vous donne un coup de patte"
        />
        <meta
          property="og:description"
          content="Ourson est la 1ère app intelligente qui vous donne un coup de patte concernant l’éveil de votre enfant sur 3 aspects : nutrition, suivi du sommeil et activités."
        />
        <meta property="og:url" content="https://www.ourson.app" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djfrwyodt/image/upload/v1686416967/squareOursonBackground_d4czmc.webp"
        />
        <title>Ourson, l'app qui vous donne un coup de patte</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/djfrwyodt/image/upload/v1686416967/squareOursonBackground_d4czmc.webp",
                "width": "1299",
                "height": "1299"
              }
            `,
          }}
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
