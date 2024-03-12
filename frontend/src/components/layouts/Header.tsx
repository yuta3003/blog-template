import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles['site-logo']} href="/">404 motivation not found</Link>
    </div>
  )
}

export default Header
