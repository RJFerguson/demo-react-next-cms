import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// actions-- > reducers-- > store-- > view-- > actions;

//actions //
export const fetchProductData = () => {
  return {
    type: "getData",
  };
};

export function getDataSuccess(data) {
  return {
    type: "getDataSuccess",
    payload: data,
  };
}

function getDataFail() {
  return {
    type: "getDataFail",
  };
}

// actions //

// reducers //

const initialState = { data: null, fetchedData: null };

function dataReducer(state = initialState, action) {
  if (action.type === "getData") {
    return {
      ...state,
      data: state.data + 1,
    };
  } else if (action.type === "getDataSuccess") {
    return {
      ...state,
      fetchedData: action.payload,
    };
  }

  return state;
}

// Thunks
export function getData() {
  return async (dispatch) => {
    dispatch(fetchProductData());
    try {
      const raw = await fetch("/products");
      const productData = await raw.json();
      dispatch(getDataSuccess(productData));
    } catch (error) {
      dispatch(getDataFail());
      console.error(error);
    }
  };
}

// store //

export const rootStore = configureStore({
  reducer: dataReducer,
  middleware: [thunk],
});

// store //
