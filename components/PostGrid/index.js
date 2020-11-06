import styles from "./index.module.scss"

export default function PostGrid({ children }) {
  return <div className={styles.postGrid}>{children}</div>
}
