import Link from "next/link"
import styles from "./index.module.scss"

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div>
        <p>SQSP Headless</p>
        <p>Everything you need to grow online.</p>
      </div>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  )
}
