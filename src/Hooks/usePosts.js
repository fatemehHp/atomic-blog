import { useRef, useState } from "react";
import { faker } from "@faker-js/faker";

// create random post function
function createPosts() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
const usePosts = () => {
  // ref
  const inputEl = useRef(null);
  const inputBody = useRef(null);
  // state
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 10 }, () => createPosts())
  );
  //   add forms state
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  //search post
  const [searchInputPost, setSearchInputPost] = useState("");

  //   addToTitle
  function addToTitle(e) {
    setPostTitle(e.target.value);
  }
  //   addToPostBody
  function addToPostBody(e) {
    setPostBody(e.target.value);
  }
  // add to post function
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
  // add searchquery
  function addToSearchQuery(searchtext) {
    setSearchInputPost(searchtext);
  }
  // searchPost
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
  };
};

export default usePosts;
