import React from 'react';
import styles from './Header.module.css';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { Person } from '@styled-icons/bootstrap/Person';
import { LogIn } from '@styled-icons/evaicons-solid/LogIn';
import { MoviesAndTv } from '@styled-icons/fluentui-system-regular/MoviesAndTv';

const Header = () => {
  const {
    setApprove,
    approve,
    setValueEmail,
    setValuePass,
    setUser,
    user,
    dados,
  } = React.useContext(GlobalContext);

  function approveFalse() {
    setValuePass('');
    setValueEmail('');
    setApprove(false);
    setUser(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.space}>
        <h1>
          Local Filmes 3000 <MoviesAndTv size="50" />
        </h1>
        <nav className={styles.nav}>
          <Link to="/conta">
            <HomeSmile className={styles.icon} size="18" />
            Home
          </Link>
          <Link to="/">
            <Person className={styles.icon} size="18" />
            {user ? dados.name : 'Login/Criar'}
          </Link>
          <Link to="/" onClick={approveFalse}>
            <LogIn className={styles.icon} size="18" />
            Sair
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
