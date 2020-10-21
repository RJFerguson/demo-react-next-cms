import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// actions-- > reducers-- > store-- > view-- > actions;

//actions //
const fetchProductData = () => {
  return {
    type: "getData",
  };
};

// actions //

// reducers //

const initialState = { data: null };

function dataReducer(state = initialState, action) {
  if (action.type === "getData") {
    return {
      ...state,
      data: state.data + 1,
    };
  }
  return state;
}

// store //

export const rootStore = configureStore({
  reducer: dataReducer,
  middleware: [thunk],
});

// store //

rootStore.dispatch(fetchProductData());
console.log(rootStore.getState());
