import Header from "../components/Header";
import Blog from "../components/Blog";

export async function getStaticProps() {
  try {
    const res = await fetch(`https://back.ourson.app/toutes-les-sections`);
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

function BlogPage({ articles }) {
  return (
    <>
      <Blog articles={articles} />
      <Header />
    </>
  );
}

export default BlogPage;
