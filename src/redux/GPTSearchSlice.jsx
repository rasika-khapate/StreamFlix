import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    GPTSearchToggle: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { GPTSearchToggle } = GPTSearchSlice.actions;

export default GPTSearchSlice.reducer;
