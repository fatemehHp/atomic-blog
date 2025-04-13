import React, { useContext } from "react";
import styles from "./Results.module.css";
import { DataContext } from "../AppLayout/AppLayout";
export default function Results() {
  const { searchedPosts } = useContext(DataContext);
  return (
    <p className={styles.searchResult}>Search results:{searchedPosts.length}</p>
  );
}
