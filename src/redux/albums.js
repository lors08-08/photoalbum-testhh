const initialState = {
  loading: false,

  items: [],
  photos: [],
};

function albums(state = initialState, action) {
  switch (action.type) {
    case "albums/load/start":
      return {
        ...state,
        loading: true,
      };
    case "albums/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "photos/load/start":
      return {
        ...state,
      };
    case "photos/load/succeed":
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
}

export default albums;
