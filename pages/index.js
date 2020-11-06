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

export async function getServerSideProps() {
  const url = `https://${process.env.SQSP_SITE_ID}.squarespace.com/blog?format=json`
  const posts = await fetch(url)
  const json = await posts.json()

  return {
    props: {
      posts: json,
    },
  }
}
