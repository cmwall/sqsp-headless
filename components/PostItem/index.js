import Link from "next/link"

export default function PostItem({ post }) {
  return (
    <div className="post-item">
      <img className="cover-image" src={post.coverImageUrl} />

      <div>
        <h2>
          <Link href={post.fullUrl}>{post.title}</Link>
        </h2>

        <div dangerouslySetInnerHTML={{ __html: post.excerpt.html }}></div>
      </div>

      <style jsx>{`
        .post-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .cover-image {
          width: 150px;
          margin-right: 20px;
        }

        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        @media (min-width: 1020px) {
          .post-item {
            margin-bottom: 60px;
          }

          .cover-image {
            width: 350px;
            margin-right: 50px;
          }

          h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  )
}
