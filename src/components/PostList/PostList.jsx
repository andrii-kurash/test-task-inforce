import { useState, useEffect } from "react";
import { fetchPosts } from "../../api";
import "./PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    loadPosts();
  }, []);

  return (
    <>
      <h3>List of posts from API</h3>
      <ul className="posts">
        {posts.map((post) => (
          <>
            <li className="post-item" key={post.id}>
              {post.title}
            </li>
            <p className="post-text">{post.body}</p>
          </>
        ))}
      </ul>
    </>
  );
}
