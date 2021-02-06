// import { createStore } from "redux";

// untuk membuat state secara GLOBAL
const { createStore } = require("redux");

const initialState = {
  dataBlog: [],
  name: "Yusuf Umar",
};
const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.payload,
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
