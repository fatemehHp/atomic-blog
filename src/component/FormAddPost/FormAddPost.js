import React from 'react'
import styles from "./FormAddPost.module.css"
import Button from '../Button/Button'
const FormAddPost = () => {
  return (
    <div  className={styles.container}>
       <Button type="addButton">Add post</Button>
       <textarea
        placeholder="Post body"
        className={styles.textarea}
      />
      <input
        placeholder="Post title"
        className={styles.input}
      />
    </div>
  )
}

export default FormAddPost