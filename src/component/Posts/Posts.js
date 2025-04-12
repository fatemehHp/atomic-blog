import React from 'react'
import styles from './Posts.module.css';

const Posts = ({posts}) => {
  return (
    <div className={styles.postCard}>
    <h2 className={styles.title}>{posts.title}</h2>
    <p className={styles.text}>{posts.body}</p>
  </div>
  )
}

export default Posts