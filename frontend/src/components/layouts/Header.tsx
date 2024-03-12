import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['site-logo']}>
        <Link href="/">404 motivation not found</Link>
      </div>
      <nav>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <Link href="#">NEWS</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="#">NEWS</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="#">NEWS</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="#">NEWS</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="#">NEWS</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
