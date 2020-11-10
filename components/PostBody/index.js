import styles from "./index.module.scss"

export default function PostBody({ body }) {
  return (
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  )
}
