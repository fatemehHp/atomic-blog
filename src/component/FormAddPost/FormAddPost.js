import React, { useContext, useState } from "react";
import styles from "./FormAddPost.module.css";
import Button from "../Button/Button";
import { DataContext } from "../AppLayout/AppLayout";
const FormAddPost = () => {
  const {
    addToPost,
    postBody,
    inputBody,
    inputEl,
    addToTitle,
    addToPostBody,
    postTitle,
  } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <Button type="addButton" handleclick={addToPost}>
        Add post
      </Button>
      <textarea
        placeholder="Post body"
        className={styles.textarea}
        value={postBody}
        onChange={(e) => addToPostBody(e)}
        ref={inputBody}
      />
      <input
        placeholder="Post title"
        className={styles.input}
        value={postTitle}
        onChange={(e) => addToTitle(e)}
        ref={inputEl}
      />
    </div>
  );
};

export default FormAddPost;
