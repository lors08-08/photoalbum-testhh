import React from "react";
import { useSelector } from "react-redux";
import { CardWrapper } from "../styled/index";
import Photo from "./Photo";

function Photos() {
  const photos = useSelector((state) => state.albums.photos);
  const albums = useSelector((state) => state.albums.items);

  return (
    <CardWrapper>
      {albums.map((album) => {
        const pics = photos.find((photo) => album.id === photo.albumId);
        return <Photo pics={pics} />;
      })}
    </CardWrapper>
  );
}

export default Photos;
