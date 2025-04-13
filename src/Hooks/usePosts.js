import { useRef, useState } from "react";
import { faker } from "@faker-js/faker";

// create random post function
function createPosts() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
// insert/search/delete/focus ,....  hook
const usePosts = () => {
  // ref
  const inputEl = useRef(null);
  const inputBody = useRef(null);
  //posts state
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 10 }, () => createPosts())
  );
  //   input form state
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  //input search state
  const [searchInputPost, setSearchInputPost] = useState("");

  //   addToNewTitle  Function
  function addToTitle(e) {
    setPostTitle(e.target.value);
  }
  //   addToNewPostBody Function
  function addToPostBody(e) {
    setPostBody(e.target.value);
  }
  // add to postList function
  function addToPost() {
    if (!postTitle) {
      inputEl.current.focus();
      return;
    }
    if (!postBody) {
      inputBody.current.focus();
      return;
    }
      setPosts((posts) => [{ title: postTitle, body: postBody }, ...posts]);
      setPostTitle("");
      setPostBody("");
  }
  // delete all posts function
  function deletePost(){
    setPosts([])
  }
  // add searchquery to state
  function addToSearchQuery(searchtext) {
    setSearchInputPost(searchtext);
  }
  // searchPost  result logic
  const searchedPosts =
    searchInputPost.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchInputPost.toLowerCase())
        )
      : posts;

  return {
    searchedPosts,
    addToPost,
    inputEl,
    inputBody,
    addToTitle,
    addToPostBody,
    postTitle,
    postBody,
    addToSearchQuery,
    searchInputPost,
    deletePost
  };
};

export default usePosts;
