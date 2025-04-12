import React from "react";
import styles from "./Header.module.css";
import Results from "../Results/Results";
const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}

    </div>
  );
};

export default Header;
