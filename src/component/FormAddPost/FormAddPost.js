import React, { useContext, useState } from 'react'
import styles from "./FormAddPost.module.css"
import Button from '../Button/Button'
import { DataContext } from '../AppLayout/AppLayout'
const FormAddPost = () => {
  const{addToPOst}=useContext(DataContext)
  const [postTitle,setPostTitle]=useState("")
  const [postBody,setPostBody]=useState("")
  function addToTitle(e){
    setPostTitle(e.target.value)
  }
  function addToPostBody(e){
    setPostBody(e.target.value)
  }

  return (
    <div  className={styles.container}>
       <Button type="addButton" handleclick={()=>addToPOst(postTitle,postBody)}>Add post</Button>
       <textarea
        placeholder="Post body"
        className={styles.textarea}
        value={postBody}
        onChange={(e)=>addToPostBody(e)}

      />
      <input
        placeholder="Post title"
        className={styles.input}
        value={postTitle}
        onChange={(e)=>addToTitle(e)}
      />
    </div>
  )
}

export default FormAddPost