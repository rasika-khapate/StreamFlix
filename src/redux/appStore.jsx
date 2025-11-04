import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GPTSearchSlice from "./GPTSearchSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    GPT: GPTSearchSlice,
    config: configSlice,
  },
});

export default appStore;
