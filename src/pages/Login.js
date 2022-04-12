import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import Button from '../components/Button';
import Error from '../components/Helper/Error';
import Input from '../components/Input';
import styles from './Login.module.css';
import { Construction } from 'styled-icons/material';

const Login = () => {
  const {
    setValueEmail,
    setValuePass,
    validate,
    error,
    approve,
    infoNames,
    dados,
    valueEmail,
    valuePass,
    setUser,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    infoNames();
  }, []);

  const navigate = useNavigate();

  function handleSubmit() {
    if (
      approve === true &&
      dados.username === valueEmail &&
      dados.password === valuePass
    ) {
      setUser(true);
      navigate('/conta');
    } else {
      alert('Insira as informações corretamente para seguir com o Login');
    }
  }

  return (
    <div className={styles.container}>
      <Input
        title="Usuário"
        type="email"
        id="user"
        onChange={({ target }) => setValueEmail(target.value)}
        onBlur={validate}
      />
      <Input
        title="Senha"
        type="password"
        id="password"
        onChange={({ target }) => setValuePass(target.value)}
        onBlur={validate}
      />
      {error && <Error error={error} />}
      <Button title="Entrar" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
