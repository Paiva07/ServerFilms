import React from 'react';
import { GET_USER } from './api';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePass, setValuePass] = React.useState('');
  const [error, setError] = React.useState('');
  const [approve, setApprove] = React.useState(false);
  const [dados, setDados] = React.useState(null);
  const [user, setUser] = React.useState(false);

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  function validate() {
    const validator = regexEmail.test(valueEmail);
    const validatorPass = regexPassword.test(valuePass);

    if (valueEmail.length === 0 || valuePass.length === 0) {
      setError('Insira seus dados para seguir com o Login');
      console.log(error);
    } else if (validator === false) {
      setError('Usuário Invalido');
      console.log(error);
    } else if (validatorPass === false) {
      setError('Senha Invalida');
      console.log(error);
    } else {
      setError(null);
      setApprove(true);
    }
  }

  function infoNames() {
    const { url, options } = GET_USER();
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  return (
    <GlobalContext.Provider
      value={{
        valueEmail,
        valuePass,
        setValueEmail,
        setValuePass,
        validate,
        error,
        approve,
        setApprove,
        infoNames,
        dados,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
