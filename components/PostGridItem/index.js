import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./index.module.scss"

export default function PostGridItem({ post }) {
  return (
    <div className={styles.postGridItem}>
      <Link href={post.fullUrl}>
        <a ariaLabel={`Read more about ${post.title}`}>
          <motion.img
            src={post.assetUrl}
            layoutId={`post-image-container-${post.id}`}
            alt={`Post detail image for ${post.title}.`}
          />
        </a>
      </Link>

      <Link href={post.fullUrl}>
        <a>{post.title}</a>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
    </div>
  )
}
