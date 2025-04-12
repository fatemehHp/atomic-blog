import React, { useState } from "react";
import styles from './List.module.css';
import { faker } from "@faker-js/faker";
import Posts from "../Posts/Posts";
function createPosts() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
export default function List() {
  const [posts, setPosts] = useState(() => Array.from({length:30},()=>createPosts()));
  return (
    <div className={styles.postContainer}>
      {
        posts.map((posts)=>{
          return <Posts posts={posts}/>
        })
      }

    </div>
  );
}
