import Head from "components/Head"
import PageContainer from "components/PageContainer"
import PostHeading from "components/PostHeading"
import PostBody from "components/PostBody"

export default function BlogPost({ post }) {
  return (
    <PageContainer>
      <Head title={`SQSP Headless — ${post.title}`} />
      <PostHeading post={post} />
      <PostBody body={post.body} />
    </PageContainer>
  )
}

export async function getStaticProps({ params: { hash } }) {
  const url = `https://${process.env.SQSP_SITE_ID}.squarespace.com/blog/${hash}?format=json`
  const post = await fetch(url)
  const json = await post.json()

  return {
    props: {
      post: json.item,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const url = `https://${process.env.SQSP_SITE_ID}.squarespace.com/blog?format=json`
  const posts = await fetch(url)
  const json = await posts.json()

  const paths = json.items.map(i => ({
    params: {
      hash: i.fullUrl.split("/blog/")[1],
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
