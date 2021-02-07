import React from "react";
import { useSelector } from "react-redux";
import { CardWrapper } from "../styled/index";
import User from "./User";

function Users() {
  const users = useSelector((state) => state.users.items);

  return (
    <CardWrapper>
      {users.map((user) => {
        return <User user={user} />;
      })}
    </CardWrapper>
  );
}

export default Users;
