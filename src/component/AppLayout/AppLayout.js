import React, { createContext, useState } from "react";
import styles from "./AppLayout.module.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";
import Logo from "../Logo/Logo";
import FormAddPost from "../FormAddPost/FormAddPost";
import List from "../List/List";
import { faker } from "@faker-js/faker";
// create random post function
function createPosts() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
// create context
export const DataContext = createContext();
// component
const AppLayout = () => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createPosts())
  );
  function addToPOst(postTitle, postBody) {
    if(!postTitle || !postBody){
      return
    }
    setPosts([...posts, { title: postTitle, body: postBody }]);
  }
  return (
    <DataContext.Provider value={{ posts, addToPOst }}>
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
