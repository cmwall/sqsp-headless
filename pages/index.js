import Head from "components/Head"
import PostGrid from "components/PostGrid"
import PageContainer from "components/PageContainer"
import PostGridItem from "components/PostGridItem"

export default function Home({ posts }) {
  return (
    <PageContainer>
      <Head />

      <PostGrid>
        {posts?.items?.map(post => (
          <PostGridItem key={post.id} post={post} />
        ))}
      </PostGrid>
    </PageContainer>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const url = `https://sqsp-headless.squarespace.com/blog?format=json`
  const posts = await fetch(url)
  const json = await posts.json()

  return {
    props: {
      posts: json,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
