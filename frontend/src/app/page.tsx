'use client'

import styles from './page.module.scss'
import BlogCardGrid from '../components/elements/BlogCardGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      <BlogCardGrid />
    </main>
  )
}
