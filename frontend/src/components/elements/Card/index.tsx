import React from 'react';
import styles from './Button.module.scss';

interface Props {
  header: string;
  title: string;
  imageUrl?: string;
}


const Card: React.FC<Props> = ({ header, title, imageUrl = 'default' }) => {
  return (
	<div></div>
  );
};

export default Card;
