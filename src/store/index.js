import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0, toggle: false }, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return { ...state, toggle: !state.toggle };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
