import React from "react";
import { Avatar, Card } from "../styled/index";

function Photo({ pics }) {
  return (
    <Card>
      <h2>{pics.title}</h2>
      <Avatar>
        <img alt="photo" src={pics.url} />
      </Avatar>
    </Card>
  );
}

export default Photo;
