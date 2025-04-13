import React, { useContext, useState } from "react";
import styles from './List.module.css';
import Posts from "../Posts/Posts";
import { DataContext } from "../AppLayout/AppLayout";

export default function List() {
  const{searchedPosts}=useContext(DataContext)





  return (
    <div className={styles.postContainer}>
      {
        searchedPosts.map((posts)=>{
          return <Posts posts={posts} key={posts.title} />
        })
      }

    </div>
  );
}
