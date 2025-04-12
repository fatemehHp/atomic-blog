import React from 'react'
import styles from './SearchPosts.module.css';
const SearchPosts = () => {
  return (
    <input
    className={styles.searchInput}
    type="text"
    placeholder="Search posts..."
  />
  )
}

export default SearchPosts