import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./index.module.scss"

export default function PostGridItem({ post }) {
  return (
    <div>
      <Link href={post.fullUrl} scroll={false}>
        <a aria-label={`Read more about ${post.title}`}>
          <motion.div
            className={styles.imageContainer}
            layoutId={`post-image-container-${post.id}`}
            style={{
              backgroundImage: `url(${post.assetUrl})`,
            }}
          />
        </a>
      </Link>

      <Link href={post.fullUrl}>
        <a className={styles.postTitle}>{post.title}</a>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
    </div>
  )
}
