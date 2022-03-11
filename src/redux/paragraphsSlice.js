import { createSlice } from "@reduxjs/toolkit";

export const paragraphsSlice = createSlice({
  name: "paragraphs",
  initialState: {
    paragraphsCount: 4,
    paragraphsType: false,
  },
  reducers: {
    countOnChange: (state, action) => {
      state.paragraphsCount = action.payload;
    },
    typeOnChange: (state, action) => {
      state.paragraphsType = action.payload;
    },
  },
});

export default paragraphsSlice.reducer;
export const { countOnChange, typeOnChange } = paragraphsSlice.actions;
