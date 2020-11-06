import Head from "components/Head"
import H1 from "components/H1"
import Subheader from "components/Subheader"
import PostItemContainer from "components/PostItemContainer"
import PostItem from "components/PostItem"

export default function Home({ posts }) {
  return (
    <div>
      <Head />

      <H1>SQSP Headless</H1>

      <Subheader>Everything you need to grow online.</Subheader>

      <PostItemContainer>
        {posts?.results?.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostItemContainer>
    </div>
  )
}

export async function getServerSideProps() {
  const collectionID = "5fa593c95fd6f121129897b1"
  const path = `/api/content-collections/${collectionID}/content-items?limit=20`
  const url = `https://${process.env.SQSP_SITE_ID}.squarespace.com${path}`

  const posts = await fetch(url, {
    credentials: "same-origin",
    headers: {
      cookie:
        "member-session=1|uzYiZkDYHi5TBu4JUngv7B1bb8JV8eb209ifX24z0BJJ|Ewe9iCTlksYaIA4D4L931gQI1PiqjCfAdOcsSPH0BUM=;",
    },
  })

  const json = await posts.json()

  return {
    props: {
      posts: json,
    },
  }
}
