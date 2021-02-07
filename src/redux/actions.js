export function loadUsers() {
  return (dispatch) => {
    dispatch({ type: "users/load/start" });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "users/load/succeed",
          payload: json,
        });
      });
  };
}

export function loadPosts() {
  return (dispatch) => {
    dispatch({ type: "posts/load/start" });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "posts/load/succeed",
          payload: json,
        });
      });
  };
}

export function addPost(title, body) {
  return (dispatch) => {
    dispatch({ type: "posts/add/start" });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        title,
        body,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "posts/add/succeed",
          payload: json,
        });
      });
  };
}

export function loadAlbums() {
  return (dispatch) => {
    dispatch({ type: "albums/load/start" });

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "albums/load/succeed",
          payload: json,
        });
      });
  };
}

export function loadPhotos() {
  return (dispatch) => {
    dispatch({ type: "photos/load/start" });

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "photos/load/succeed",
          payload: json,
        });
      });
  };
}
