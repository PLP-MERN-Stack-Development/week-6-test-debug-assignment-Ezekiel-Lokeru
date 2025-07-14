import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Author: {post.author}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
