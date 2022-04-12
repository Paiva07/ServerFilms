import React from 'react';
import styles from './Modal.module.css';
import { PUT_FILMS } from '../api';

const Modal = ({ infoModal, dados, setDados, modal, setModal }) => {
  const [film, setFilm] = React.useState('');
  const [genr, setGenr] = React.useState('');

  function editFilms(infoModal, film, genr) {
    const { url, options } = PUT_FILMS(infoModal, { title: film, genre: genr });
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setDados([...dados, json]));
    setModal(!modal);
  }
  return (
    <div className={styles.containerInput}>
      <p>Atualizar Titulo</p>
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => setFilm(target.value)}
      />
      <p>Atualizar Genero</p>
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => setGenr(target.value)}
      />
      <button
        className={styles.button}
        onClick={() => editFilms(infoModal, film, genr)}
      >
        Alterar
      </button>
    </div>
  );
};

export default Modal;
