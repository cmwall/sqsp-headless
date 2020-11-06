import { motion } from "framer-motion"
import styles from "./index.module.scss"

const h2Variants = {
  pageInitial: {
    opacity: 0,
    rotateX: 90,
  },
  pageAnimate: {
    opacity: 1,
    rotateX: 0,
    transformOrigin: "top",
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.4,
    },
  },
  pageExit: {
    opacity: 0,
    rotateX: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
}

const excerptVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.6,
    },
  },
  pageExit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
}

export default function PostHeading({ post }) {
  return (
    <div className={styles.postHeading}>
      <motion.img
        layoutId={`post-image-container-${post.id}`}
        src={post.assetUrl}
      />

      <div className={styles.content}>
        <motion.h2
          variants={h2Variants}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
        >
          {post.title}
        </motion.h2>

        <motion.div
          variants={excerptVariants}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></motion.div>
      </div>
    </div>
  )
}
