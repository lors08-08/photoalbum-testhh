const initialState = {
  loading: false,

  items: [],
};

function users(state = initialState, action) {
  switch (action.type) {
    case "users/load/start":
      return {
        ...state,
        loading: true,
      };
    case "users/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default users;
