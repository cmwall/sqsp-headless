import Link from "next/link"
import styles from "./index.module.scss"

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <p>SQSP Headless</p>
          <p>Everything you need to grow online.</p>
        </a>
      </Link>

      <nav className={styles.navigation}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  )
}
