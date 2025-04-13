import React, {  useContext} from 'react'
import styles from './SearchPosts.module.css';
import { DataContext } from '../AppLayout/AppLayout';
const SearchPosts = () => {
 const {searchInputPost,addToSearchQuery} =useContext(DataContext)

  return (
    <input
    className={styles.searchInput}
    type="text"
    value={searchInputPost}
    placeholder="Search posts..."
    onChange={(e) => addToSearchQuery(e.target.value)}
  />
  )
}

export default SearchPosts