import React from 'react'
import styles from './Button.module.scss'

interface Props {
  text: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const Button: React.FC<Props> = ({
  text,
  handleClick,
  className = 'default',
}) => {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
