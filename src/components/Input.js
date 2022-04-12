import React from 'react';
import styles from './Input.module.css';

const Input = ({ title, type, id, ...props }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {title}
        <input type={type} id={id} {...props} />
      </label>
    </div>
  );
};

export default Input;
