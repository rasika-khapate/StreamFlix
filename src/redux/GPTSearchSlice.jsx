import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
    GPTMovies: null,
    GPTMovieName: null,
  },
  reducers: {
    GPTSearchToggle: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies: (state, action) => {
      const { GPTMovieName, GPTMovies } = action.payload;
      state.GPTMovieName = GPTMovieName;
      state.GPTMovies = GPTMovies;
    },
    clearGPTMovies: (state) => {
      state.GPTMovieName = null;
      state.GPTMovies = null;
    },
  },
});

export const { GPTSearchToggle, addGPTMovies, clearGPTMovies } =
  GPTSearchSlice.actions;

export default GPTSearchSlice.reducer;
