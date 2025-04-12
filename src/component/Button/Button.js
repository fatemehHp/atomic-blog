import React from "react";
import styles from './Button.module.css';
const Button = ({children,type,onclick}) => {
  return <button className={`${styles.btn } ${styles[type] }`}>
    {children}
  </button>;
};

export default Button;
