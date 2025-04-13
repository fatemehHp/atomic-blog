import React, { useContext } from "react";
import styles from "./AppLayout.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";
import Logo from "../Logo/Logo";
import FormAddPost from "../FormAddPost/FormAddPost";
import List from "../List/List";
import { PostContext } from "../../context/PostContext";

// component
const AppLayout = () => {
  const { deletePost } = useContext(PostContext);
  return (
    <div className={styles.container}>
      <Header>
        <Button type="removeButton" handleclick={deletePost}>
          Remove All Posts
        </Button>
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
  );
};

export default AppLayout;
