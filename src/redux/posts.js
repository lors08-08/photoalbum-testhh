const initialState = {
  loading: false,

  items: [],
};

function posts(state = initialState, action) {
  switch (action.type) {
    case "posts/load/start":
      return {
        ...state,
        loading: true,
      };
    case "posts/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "posts/add/start":
      return {
        ...state,
      };
    case "posts/add/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}

export default posts;
