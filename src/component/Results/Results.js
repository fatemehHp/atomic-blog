import React, { useContext } from "react";
import styles from "./Results.module.css";
import { PostContext } from "../../context/PostContext";
export default function Results() {
  const { searchedPosts } = useContext(PostContext);
  return (
    <p className={styles.searchResult}>Search results:{searchedPosts.length}</p>
  );
}
