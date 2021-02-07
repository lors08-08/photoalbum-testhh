import React from "react";
import { Card } from "../styled";
import { useHistory } from "react-router-dom";

function Album({ album }) {
  const history = useHistory();

  return (
    <Card
      onClick={() => {
        history.push(`/albums/${album.id}`);
      }}
    >
      {album.title}
    </Card>
  );
}

export default Album;
