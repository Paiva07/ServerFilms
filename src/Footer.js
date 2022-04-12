import React from 'react';
import styles from './Footer.module.css';
import { MoviesAndTv } from '@styled-icons/fluentui-system-regular/MoviesAndTv';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MoviesAndTv size="40" />
      <p>Local Filmes 3000. Alguns direitos reservados</p>
    </footer>
  );
};
export default Footer;
