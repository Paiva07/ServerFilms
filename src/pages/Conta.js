import React from 'react';
import styles from './Conta.module.css';
import { Trash } from '@styled-icons/bootstrap/Trash';
import { Edit } from '@styled-icons/boxicons-solid/Edit';
import { GET_FILMS, DELETE_FILMS, POST_FILMS } from '../api';
import Modal from '../components/Modal';
import ModalAdd from '../components/ModalAdd';

const Conta = () => {
  const [dados, setDados] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [infoModal, setInfoModal] = React.useState('');

  React.useEffect(() => {
    const { url, options } = GET_FILMS();
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [dados]);

  function deleteFilm(id) {
    const { url, options } = DELETE_FILMS(id);
    fetch(url, options).then((response) => response.json());
  }

  function editFilm(id) {
    setModal(!modal);
    setInfoModal(id);
  }

  if (dados === null) return null;
  return (
    <>
      <div className={styles.container}>
        {dados.map(({ id, title, genre }) => (
          <div className={styles.containerFilm} key={id}>
            <p>Nome: {title}</p> <p>Genero: {genre}</p>
            <div className={styles.icon}>
              <Trash
                className={styles.trash}
                size="30"
                onClick={() => deleteFilm(id)}
              />
              <Edit
                className={styles.trash}
                size="30"
                onClick={() => editFilm(id)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button1} onClick={() => setModalAdd(!modalAdd)}>
        Adicionar Filme
      </button>
      {modal && (
        <Modal
          infoModal={infoModal}
          dados={dados}
          setDados={setDados}
          modal={modal}
          setModal={setModal}
        />
      )}
      {modalAdd && (
        <ModalAdd
          dados={dados}
          setDados={setDados}
          setModalAdd={setModalAdd}
          modalAdd={modalAdd}
        />
      )}
    </>
  );
};

export default Conta;
