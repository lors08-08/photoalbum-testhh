import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/actions";
import { CardWrapper, AddPost, Error, StyledButton } from "../styled/index";
import Post from "./Post";

function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.items);
  const users = useSelector((state) => state.users.items);

  const [show, setShow] = useState(true);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePost = (title, body) => {
    if (title.length && body.length) {
      setError(false);
      dispatch(addPost(title, body));
      setShow(!show);
      setTitle("");
      setBody("");
    } else {
      return setError(true);
    }
  };

  return (
    <>
      {show ? (
        <StyledButton onClick={() => setShow(!show)}>
          Добавить пост
        </StyledButton>
      ) : (
        <AddPost>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Заголовок"
          />
          <input
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Текст"
          />
          {error && <Error>*Заполните все поля</Error>}
          <span>
            <div onClick={() => setShow(!show)}>Закрыть</div>
            <div onClick={() => handlePost(title, body)}>Добавить</div>
          </span>
        </AddPost>
      )}
      <CardWrapper>
        {posts.map((post) => {
          const author = users.find((user) => user.id === post.userId);

          return <Post author={author} post={post} />;
        })}
      </CardWrapper>
    </>
  );
}

export default Posts;
