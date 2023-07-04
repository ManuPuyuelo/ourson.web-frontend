import Head from "next/head";

const Meta = ({
  robots,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}) => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta name="robots" content={robots} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta name="author" content="Ourson.app" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/djfrwyodt/image/upload/q_auto/v1686416967/squareOursonBackground_d4czmc.webp",
                "width": "1299",
                "height": "1299"
              }
            `,
      }}
    />
  </Head>
);

export default Meta;
