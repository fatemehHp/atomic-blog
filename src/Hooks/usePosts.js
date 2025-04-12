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
    Array.from({ length: 30 }, () => createPosts())
  );
  //   add forms state
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
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
    setPosts([...posts, { title: postTitle, body: postBody }]);
    setPostTitle("")
    setPostBody("")
  }
  return {
    posts,
    addToPost,
    inputEl,
    inputBody,
    addToTitle,
    addToPostBody,
    postTitle,
    postBody,
  };
};

export default usePosts;
