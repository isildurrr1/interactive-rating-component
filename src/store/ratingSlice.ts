import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RatingType = { rating: number | null }

const initialState: RatingType = { rating: null }

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    changeRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
  }
});

export const { changeRating } = ratingSlice.actions;

export default ratingSlice.reducer;