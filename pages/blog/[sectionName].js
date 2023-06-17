import Header from "../../components/Header";
import Blog from "../../components/Blog";

export async function getStaticProps({ params }) {
  const sectionName = params.sectionName;
  try {
    const res = await fetch(`https://back.ourson.app/section/${sectionName}`);
    const data = await res.json();

    if (data.result) {
      return {
        props: {
          articles: data.articlesList,
        },
      };
    } else {
      // Handle error
      return {
        props: {
          articles: [],
        },
      };
    }
  } catch (error) {
    // Handle error
    return {
      props: {
        articles: [],
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
