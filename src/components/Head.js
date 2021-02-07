import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "./styled/index";

function Head() {
  return (
    <Header>
      <NavLink to="/users">
        <h2>Пользователи</h2>
      </NavLink>
      <Link to="/posts">
        <h2>Посты</h2>
      </Link>
      <Link to="/albums">
        <h2>Альбомы</h2>
      </Link>
    </Header>
  );
}

export default Head;
