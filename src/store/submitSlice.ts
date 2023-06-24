import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SubmitedType = { submited: boolean }

const initialState: SubmitedType = { submited: false }

const submitSlice = createSlice({
  name: 'submit',
  initialState,
  reducers: {
    submitRating: (state, action: PayloadAction<boolean>) => {
      state.submited = action.payload;
    },
  }
});

export const { submitRating } = submitSlice.actions;

export default submitSlice.reducer;