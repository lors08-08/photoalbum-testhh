import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos } from "../../redux/actions";
import { CardWrapper } from "../styled/index";
import Album from "./Album";

function Albums() {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.items);

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <CardWrapper>
      {albums.map((album) => {
        return <Album album={album} />;
      })}
    </CardWrapper>
  );
}

export default Albums;
