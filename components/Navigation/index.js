import Link from "next/link"
import styles from "./index.module.scss"

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>
          <p>SQSP Headless</p>
          <p>Everything you need to grow online.</p>
        </a>
      </Link>

      <div className={styles.linkContainer}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  )
}
