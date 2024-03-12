import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={""}>© 2023 Example Inc. All Rights Reserved.</p>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <Link href="#">About</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="#">サイトマップ</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="#">プライバシーポリシー</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
