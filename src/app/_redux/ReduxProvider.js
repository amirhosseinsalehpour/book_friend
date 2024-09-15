"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import bookReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
