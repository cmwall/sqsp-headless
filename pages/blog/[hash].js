import PageContainer from "components/PageContainer"
import PostHeading from "components/PostHeading"

export default function BlogPost({ post }) {
  return (
    <PageContainer>
      <PostHeading post={post} />
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
