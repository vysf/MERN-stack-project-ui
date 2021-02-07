const initialState = {
  name: "Yusuf",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Umar",
    };
  }
  return state;
};

export default globalReducer;
