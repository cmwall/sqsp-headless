import Navigation from "components/Navigation"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import styles from "./index.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />

      <AnimatePresence exitBeforeEnter initial={false}>
        <AnimateSharedLayout>{children}</AnimateSharedLayout>
      </AnimatePresence>
    </div>
  )
}
