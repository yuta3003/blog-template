import React from 'react'
import styles from './Button.module.scss'

interface Props {
  text: string
  handleClick: () => void
}

const Button = (props: Props) => {
  const {text, handleClick} = props
  return (
    <div
      className={styles.button}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
