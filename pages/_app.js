import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Code du Google Tag Manager à la balise <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M4VH94M');
            `,
          }}
        />
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
      {/* Code du Google Tag Manager à la balise <body> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4VH94M"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
