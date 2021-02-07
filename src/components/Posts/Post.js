import React from "react";
import { Card } from "../styled";

function Post({ post, author }) {
  return (
    <Card key={post.id}>
      <h5>
        Автор: <u>{author.name}</u>
      </h5>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Card>
  );
}

export default Post;
