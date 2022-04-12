import React from 'react';
import styles from './ModalAdd.module.css';
import { POST_FILMS } from '../api';

const ModalAdd = ({ dados, setDados, modalAdd, setModalAdd }) => {
  const [film, setFilm] = React.useState('');
  const [genr, setGenr] = React.useState('');

  function addFilm(film, genr) {
    const { url, options } = POST_FILMS({ title: film, genre: genr });
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setDados([...dados, json]));
    setModalAdd(!modalAdd);
  }

  return (
    <div className={styles.containerInput}>
      <p>Adicionar novos Filmes</p>
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => setFilm(target.value)}
      />
      <p>Finalize o Genero</p>
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => setGenr(target.value)}
      />
      <button className={styles.button} onClick={() => addFilm(film, genr)}>
        Adicionar
      </button>
    </div>
  );
};

export default ModalAdd;
