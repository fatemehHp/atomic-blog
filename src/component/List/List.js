import React, { useContext, useState } from "react";
import styles from './List.module.css';
import Posts from "../Posts/Posts";
import { DataContext } from "../AppLayout/AppLayout";

export default function List() {
  const{posts}=useContext(DataContext)





  return (
    <div className={styles.postContainer}>
      {
        posts.map((posts)=>{
          return <Posts posts={posts} key={posts.title} />
        })
      }

    </div>
  );
}
