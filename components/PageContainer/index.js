import { motion } from "framer-motion"

const pageTransitionVariants = {
  pageInitial: {
    // opacity: 0,
  },
  pageAnimate: {
    // opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
  pageExit: {
    // opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
      when: "afterChildren",
    },
  },
}

export default function PageContainer({ children }) {
  return (
    <motion.main
      variants={pageTransitionVariants}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
    >
      {children}
    </motion.main>
  )
}
