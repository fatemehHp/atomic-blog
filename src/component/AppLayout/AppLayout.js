import React, { createContext, useRef, useState } from "react";
import styles from "./AppLayout.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";
import Logo from "../Logo/Logo";
import FormAddPost from "../FormAddPost/FormAddPost";
import List from "../List/List";
import usePosts from "../../Hooks/usePosts";

// create context
export const DataContext = createContext();
// component
const AppLayout = () => {
  const {
    posts,
    addToPost,
    inputEl,
    inputBody,
    addToTitle,
    addToPostBody,
    postTitle,
    postBody,
  } = usePosts();

  return (
    <DataContext.Provider
      value={{
        posts,
        addToPost,
        inputEl,
        inputBody,
        addToTitle,
        addToPostBody,
        postTitle,
        postBody,
      }}
    >
      <div className={styles.container}>
        <Header>
          <Button type="removeButton">Remove All Posts</Button>
          <SearchPosts />
          <Results />
          <Logo />
        </Header>
        <main className={styles.main}>
          <FormAddPost />
          <List />
        </main>
        {/* link to another page (archive)  */}
        {/* footer */}
      </div>
    </DataContext.Provider>
  );
};

export default AppLayout;
