import React from "react";
import { Avatar, Card } from "../styled";

function User({ user }) {
  return (
    <Card key={user.id}>
      <Avatar>{user.name[0]}</Avatar>
      <h1>
        {user.name} | {user.username}
      </h1>
      <h4>{user.email}</h4>
      <h2>Info</h2>
      <ul>
        <li>
          <b>Address</b>: {user.address.city + `, ` + user.address.street}
        </li>
        <li>
          <b>Phone</b>: {user.phone}
        </li>
        <li>
          <b>Website</b>: {user.website}
        </li>
      </ul>
    </Card>
  );
}

export default User;
