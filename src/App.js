import React, { useEffect } from "react";
import Head from "./components/Head";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { loadAlbums, loadPosts, loadUsers } from "./redux/actions";
import { MainWrapper, MainBox } from "./components/styled/index";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    ///получаем пользователей
    dispatch(loadUsers());
    ///получаем посты
    dispatch(loadPosts());
    ///получаем альбомы
    dispatch(loadAlbums());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <MainWrapper>
      <MainBox>
        <Head />
        <Feed />
      </MainBox>
    </MainWrapper>
  );
}

export default App;
