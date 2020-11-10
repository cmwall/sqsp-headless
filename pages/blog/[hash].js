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

export async function getServerSideProps({ params: { hash } }) {
  const url = `https://${process.env.SQSP_SITE_ID}.squarespace.com/blog/${hash}?format=json`
  const post = await fetch(url)
  const json = await post.json()

  return {
    props: {
      post: json.item,
    },
  }
}
